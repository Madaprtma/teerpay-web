import { useState, useEffect, useCallback } from 'react'
import { createWalletClient, createPublicClient, custom, http, parseUnits, formatUnits } from 'viem'
import {
  ARC_CHAIN_ID, ARC_RPC, ARC_EXPLORER,
  USDC_ADDRESS, CONTRACT_ADDR, USDC_DECIMALS,
  arcTestnet, CORRIDORS, CONTRACT_ABI, USDC_ABI,
} from './config'

// ── App Kit (Circle SDK) ──────────────────────────────────────
// Dynamically imported so build doesn't fail if SDK unavailable
let AppKit = null
let viemAdapter = null

async function loadAppKit(walletClient) {
  try {
    const { AppKit: AK } = await import('@circle-fin/app-kit')
    const { createViemV2Adapter } = await import('@circle-fin/adapter-viem-v2')
    viemAdapter = createViemV2Adapter(walletClient, { chain: arcTestnet })
    AppKit = AK
    return true
  } catch (e) {
    console.warn('App Kit not available, using ethers fallback:', e.message)
    return false
  }
}

// ── Styles (inline to keep single-file) ──────────────────────
const S = {
  nav: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 2rem', height: 60,
    background: 'rgba(7,9,15,0.85)', backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    position: 'sticky', top: 0, zIndex: 100,
  },
  logo: {
    fontFamily: 'Syne, sans-serif', fontSize: '1.15rem', fontWeight: 800,
    letterSpacing: '-0.02em', color: '#e8ecf4',
  },
  badge: {
    fontSize: 11, fontWeight: 500, fontFamily: 'DM Mono, monospace',
    background: 'rgba(79,126,248,0.12)', color: '#4f7ef8',
    border: '1px solid rgba(79,126,248,0.25)',
    padding: '3px 10px', borderRadius: 20,
  },
  btnConnect: {
    background: 'linear-gradient(135deg,#4f7ef8,#38bdf8)', color: '#fff',
    border: 'none', padding: '7px 16px', borderRadius: 10,
    fontSize: 13, fontWeight: 500,
  },
  hero: { maxWidth: 720, margin: '0 auto', padding: '4rem 2rem 2.5rem', textAlign: 'center' },
  h1: { fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1rem' },
  grid: { display: 'grid', gridTemplateColumns: '400px 1fr', gap: 20, maxWidth: 1080, margin: '0 auto', padding: '0 2rem 4rem' },
  card: { background: '#111823', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, overflow: 'hidden' },
  cardHead: { display: 'flex', alignItems: 'center', gap: 10, padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.07)' },
  cardIcon: { width: 30, height: 30, borderRadius: 8, background: 'rgba(79,126,248,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 },
  cardTitle: { fontSize: 13, fontWeight: 600, color: '#e8ecf4' },
  cardBody: { padding: '1.25rem' },
  label: { fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#4e5e78', marginBottom: 6, display: 'block' },
  input: { width: '100%', background: '#161e2d', border: '1px solid rgba(255,255,255,0.07)', color: '#e8ecf4', padding: '10px 12px', borderRadius: 10, fontSize: 14, outline: 'none' },
  sendBtn: { width: '100%', padding: 13, background: 'linear-gradient(135deg,#4f7ef8,#38bdf8)', color: '#fff', border: 'none', borderRadius: 10, fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 700, marginTop: 4 },
  appKitBtn: { width: '100%', padding: 13, background: 'rgba(56,189,248,0.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.3)', borderRadius: 10, fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 600, marginTop: 8 },
  infoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: 12 },
}

// ── Components ────────────────────────────────────────────────

function CorridorGrid({ selected, onSelect }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: '1.25rem' }}>
      {CORRIDORS.map((c, i) => (
        <button
          key={c.country}
          onClick={() => onSelect(i)}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: selected === i ? 'rgba(79,126,248,0.08)' : '#161e2d',
            border: `1px solid ${selected === i ? '#4f7ef8' : 'rgba(255,255,255,0.07)'}`,
            borderRadius: 10, padding: '9px 11px', textAlign: 'left',
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>{c.flag}</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#e8ecf4' }}>{c.country}</div>
            <div style={{ fontSize: 10, color: '#4e5e78', fontFamily: 'DM Mono, monospace' }}>{c.currency}</div>
          </div>
        </button>
      ))}
    </div>
  )
}

function StatusBox({ status }) {
  if (!status) return null
  const colors = {
    info:    { bg: 'rgba(79,126,248,0.1)',  border: 'rgba(79,126,248,0.3)',  text: '#93b8ff' },
    success: { bg: 'rgba(34,197,94,0.08)',  border: 'rgba(34,197,94,0.3)',   text: '#86efac' },
    error:   { bg: 'rgba(239,68,68,0.08)',  border: 'rgba(239,68,68,0.3)',   text: '#fca5a5' },
  }
  const c = colors[status.type] || colors.info
  return (
    <div style={{ marginTop: '0.85rem', padding: '11px 14px', borderRadius: 10, fontSize: 13, lineHeight: 1.5, background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
      dangerouslySetInnerHTML={{ __html: status.msg }} />
  )
}

// ── Main App ──────────────────────────────────────────────────
export default function App() {
  const [walletClient, setWalletClient] = useState(null)
  const [publicClient]  = useState(() => createPublicClient({ chain: arcTestnet, transport: http(ARC_RPC) }))
  const [address, setAddress]     = useState(null)
  const [balance, setBalance]     = useState(null)
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [amount, setAmount]       = useState('0.01')
  const [memo, setMemo]           = useState('')
  const [status, setStatus]       = useState(null)
  const [loading, setLoading]     = useState(false)
  const [stats, setStats]         = useState(null)
  const [txHistory, setTxHistory] = useState([])
  const [appKitReady, setAppKitReady] = useState(false)
  const [sendMode, setSendMode]   = useState('contract') // 'contract' | 'appkit'

  const corridor = CORRIDORS[selectedIdx]

  // Load contract stats on mount
  useEffect(() => {
    loadStats()
  }, [])

  async function loadStats() {
    try {
      const data = await publicClient.readContract({
        address: CONTRACT_ADDR,
        abi: CONTRACT_ABI,
        functionName: 'getStats',
      })
      setStats({
        txCount: data[1].toString(),
        volume:  parseFloat(formatUnits(data[0], USDC_DECIMALS)).toFixed(4),
        paused:  data[4],
      })
    } catch (e) { console.warn('Stats error:', e) }
  }

  // Connect MetaMask
  async function connectWallet() {
    if (!window.ethereum) { alert('MetaMask not found!'); return }
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })

      // Switch to Arc Testnet
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x' + ARC_CHAIN_ID.toString(16) }],
        })
      } catch (e) {
        if (e.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x' + ARC_CHAIN_ID.toString(16),
              chainName: 'Arc Testnet',
              nativeCurrency: { name: 'USDC', symbol: 'USDC', decimals: 18 },
              rpcUrls: [ARC_RPC],
              blockExplorerUrls: [ARC_EXPLORER],
            }],
          })
        }
      }

      const wc = createWalletClient({ chain: arcTestnet, transport: custom(window.ethereum) })
      const [addr] = await wc.getAddresses()
      setWalletClient(wc)
      setAddress(addr)

      // Load App Kit
      const ok = await loadAppKit(wc)
      setAppKitReady(ok)

      await refreshBalance(addr)
      await loadTxHistory(addr)
      loadStats()
    } catch (e) { alert('Connection failed: ' + e.message) }
  }

  async function refreshBalance(addr) {
    try {
      const raw = await publicClient.readContract({
        address: USDC_ADDRESS, abi: USDC_ABI, functionName: 'balanceOf', args: [addr || address],
      })
      setBalance(parseFloat(formatUnits(raw, USDC_DECIMALS)).toFixed(2))
    } catch (e) { console.warn(e) }
  }

  async function loadTxHistory(addr) {
    try {
      const logs = await publicClient.getLogs({
        address: CONTRACT_ADDR,
        event: CONTRACT_ABI.find(x => x.name === 'RemittanceSent'),
        args: { sender: addr || address },
        fromBlock: BigInt(0),
        toBlock: 'latest',
      })
      const txs = logs.slice(-10).reverse().map(log => ({
        country:  log.args.country,
        currency: log.args.currency,
        amount:   formatUnits(log.args.amount, USDC_DECIMALS),
        memo:     log.args.memo,
        txHash:   log.transactionHash,
      }))
      setTxHistory(txs)
    } catch (e) { console.warn('History error:', e) }
  }

  // ── SEND via TeerPay Smart Contract ──────────────────────────
  async function sendViaContract() {
    if (!walletClient) return
    const amtRaw = parseUnits(parseFloat(amount).toFixed(6), USDC_DECIMALS)

    // Check + approve
    const allowance = await publicClient.readContract({
      address: USDC_ADDRESS, abi: USDC_ABI, functionName: 'allowance',
      args: [address, CONTRACT_ADDR],
    })
    if (allowance < amtRaw) {
      setStatus({ type: 'info', msg: '⏳ Step 1/2 — Approving USDC (confirm in MetaMask)...' })
      const approveTx = await walletClient.writeContract({
        address: USDC_ADDRESS, abi: USDC_ABI, functionName: 'approve',
        args: [CONTRACT_ADDR, amtRaw * 1000n],
      })
      await publicClient.waitForTransactionReceipt({ hash: approveTx })
    }

    // Send via smart contract
    setStatus({ type: 'info', msg: '⏳ Step 2/2 — Calling sendRemittance() (confirm in MetaMask)...' })
    const memoStr = memo || `TeerPay|${corridor.country}|${corridor.currency}|${amount}USDC`
    const tx = await walletClient.writeContract({
      address: CONTRACT_ADDR, abi: CONTRACT_ABI, functionName: 'sendRemittance',
      args: [corridor.address, amtRaw, corridor.country, corridor.currency, memoStr],
    })
    await publicClient.waitForTransactionReceipt({ hash: tx })
    return tx
  }

  // ── SEND via App Kit (Circle SDK) ─────────────────────────── 
  async function sendViaAppKit() {
    if (!AppKit || !viemAdapter) throw new Error('App Kit not loaded')

    const kit = new AppKit()
    setStatus({ type: 'info', msg: '⏳ Sending via Circle App Kit (confirm in MetaMask)...' })

    // kit.send() handles approve + transfer in one call
    const result = await kit.send({
      from: { adapter: viemAdapter, chain: 'Arc_Testnet' },
      to: corridor.address,
      amount: parseFloat(amount).toFixed(2),
      token: 'USDC',
    })
    return result?.transactionHash
  }

  // ── Main send handler ─────────────────────────────────────────
  async function handleSend() {
    if (!walletClient) { alert('Connect wallet first.'); return }
    const amt = parseFloat(amount)
    if (!amt || amt < 0.01) { setStatus({ type: 'error', msg: 'Minimum 0.01 USDC.' }); return }
    if (amt > 100)          { setStatus({ type: 'error', msg: 'Maximum 100 USDC.' });  return }

    setLoading(true)
    try {
      let txHash
      if (sendMode === 'appkit' && appKitReady) {
        txHash = await sendViaAppKit()
      } else {
        txHash = await sendViaContract()
      }

      const modeLabel = sendMode === 'appkit' ? 'Circle App Kit' : 'TeerPay Contract'
      setStatus({
        type: 'success',
        msg: `✅ ${amount} USDC sent to ${corridor.country} via ${modeLabel}!<br><a href="${ARC_EXPLORER}/tx/${txHash}" target="_blank" style="color:#86efac">View on ArcScan ↗</a>`,
      })
      await refreshBalance()
      await loadTxHistory()
      await loadStats()
    } catch (e) {
      setStatus({ type: 'error', msg: '❌ ' + (e?.shortMessage || e?.message || 'Transaction failed').slice(0, 140) })
    } finally {
      setLoading(false)
    }
  }

  const flags = { Indonesia:'🇮🇩', Philippines:'🇵🇭', Vietnam:'🇻🇳', Nigeria:'🇳🇬', India:'🇮🇳' }

  return (
    <>
      {/* NAV */}
      <nav style={S.nav}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#4f7ef8,#38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💸</div>
          <span style={S.logo}>Teer<span style={{ color: '#38bdf8' }}>Pay</span></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={S.badge}>⬡ Arc Testnet · 5042002</span>
          {!address ? (
            <button style={S.btnConnect} onClick={connectWallet}>Connect wallet</button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#111823', border: '1px solid rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: 10, fontSize: 13 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
              <span style={{ fontFamily: 'DM Mono, monospace' }}>{address.slice(0,6)}...{address.slice(-4)}</span>
              <span style={{ color: '#38bdf8', fontWeight: 500 }}>{balance} USDC</span>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <div style={S.hero}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#38bdf8', marginBottom: '1.5rem', border: '1px solid rgba(56,189,248,0.2)', padding: '4px 12px', borderRadius: 20, background: 'rgba(56,189,248,0.06)' }}>
          ⬡ Powered by Arc App Kit + Smart Contract
        </div>
        <h1 style={S.h1}>
          Send USDC across borders,{' '}
          <span style={{ background: 'linear-gradient(135deg,#4f7ef8,#38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>instantly.</span>
        </h1>
        <p style={{ color: '#8b9ab8', fontSize: '1rem', maxWidth: 440, margin: '0 auto 2rem', lineHeight: 1.7 }}>
          TeerPay uses Circle's App Kit SDK + a deployed smart contract on Arc Testnet. No KYC, near-zero fees, every transfer on-chain.
        </p>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden', maxWidth: 800, margin: '0 auto' }}>
          {[
            { label: 'Total transfers', val: stats?.txCount || '—', color: '#4f7ef8' },
            { label: 'Volume sent',     val: stats ? stats.volume + ' USDC' : '—', color: '#e8ecf4' },
            { label: 'Corridors',       val: '5', color: '#22c55e' },
            { label: 'Powered by',      val: 'App Kit', color: '#38bdf8' },
          ].map(s => (
            <div key={s.label} style={{ background: '#111823', padding: '1.1rem 1.25rem' }}>
              <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#4e5e78', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: s.color }}>{s.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* APP GRID */}
      <div style={S.grid}>

        {/* LEFT — SEND PANEL */}
        <div>
          <div style={S.card}>
            <div style={S.cardHead}>
              <div style={S.cardIcon}>🌏</div>
              <span style={S.cardTitle}>Send remittance</span>
            </div>
            <div style={S.cardBody}>
              <CorridorGrid selected={selectedIdx} onSelect={setSelectedIdx} />

              <div style={{ marginBottom: '1rem' }}>
                <label style={S.label}>Recipient</label>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#4e5e78', background: '#161e2d', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '8px 12px', wordBreak: 'break-all' }}>
                  {corridor.address}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={S.label}>Amount</label>
                <div style={{ position: 'relative' }}>
                  <input
                    style={{ ...S.input, paddingRight: 54 }}
                    type="number" value={amount} min="0.01" max="100" step="0.01"
                    onChange={e => setAmount(e.target.value)}
                  />
                  <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 12, fontWeight: 600, fontFamily: 'DM Mono, monospace', color: '#38bdf8' }}>USDC</span>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={S.label}>Memo <span style={{ textTransform: 'none', letterSpacing: 0, color: '#4e5e78' }}>(optional — stored on-chain)</span></label>
                <input style={S.input} type="text" value={memo} maxLength={80} placeholder="e.g. monthly family transfer" onChange={e => setMemo(e.target.value)} />
              </div>

              {/* SEND MODE TOGGLE */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: '0.75rem' }}>
                {['contract', 'appkit'].map(mode => (
                  <button
                    key={mode}
                    onClick={() => setSendMode(mode)}
                    style={{
                      padding: '7px 10px', borderRadius: 8, fontSize: 11, fontWeight: 600,
                      background: sendMode === mode ? 'rgba(79,126,248,0.12)' : 'transparent',
                      border: `1px solid ${sendMode === mode ? '#4f7ef8' : 'rgba(255,255,255,0.07)'}`,
                      color: sendMode === mode ? '#4f7ef8' : '#8b9ab8',
                    }}
                  >
                    {mode === 'contract' ? '📋 TeerPay Contract' : '⚡ Circle App Kit'}
                  </button>
                ))}
              </div>
              {sendMode === 'appkit' && (
                <div style={{ fontSize: 11, color: '#38bdf8', background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.15)', borderRadius: 8, padding: '7px 10px', marginBottom: '0.75rem' }}>
                  Uses <code>kit.send()</code> from Circle App Kit SDK — single call, no manual approve needed.
                </div>
              )}

              <button style={{ ...S.sendBtn, opacity: loading || !address ? 0.4 : 1 }} onClick={handleSend} disabled={loading || !address}>
                {loading ? 'Sending...' : !address ? 'Connect wallet to send' : sendMode === 'appkit' ? 'Send via App Kit →' : 'Send via TeerPay →'}
              </button>

              <StatusBox status={status} />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* APP KIT INFO */}
          <div style={S.card}>
            <div style={S.cardHead}>
              <div style={S.cardIcon}>⚡</div>
              <span style={S.cardTitle}>Circle App Kit integration</span>
              <span style={{ marginLeft: 'auto', fontSize: 11, background: appKitReady ? 'rgba(34,197,94,0.1)' : 'rgba(245,158,11,0.1)', color: appKitReady ? '#22c55e' : '#f59e0b', border: `1px solid ${appKitReady ? 'rgba(34,197,94,0.2)' : 'rgba(245,158,11,0.2)'}`, padding: '2px 8px', borderRadius: 20 }}>
                {appKitReady ? '✓ Connected' : 'Connect wallet'}
              </span>
            </div>
            <div style={S.cardBody}>
              <div style={S.infoRow}><span style={{ color: '#4e5e78' }}>SDK</span><span style={{ fontFamily: 'DM Mono, monospace', color: '#38bdf8', fontSize: 11 }}>@circle-fin/app-kit</span></div>
              <div style={S.infoRow}><span style={{ color: '#4e5e78' }}>Adapter</span><span style={{ fontFamily: 'DM Mono, monospace', color: '#38bdf8', fontSize: 11 }}>@circle-fin/adapter-viem-v2</span></div>
              <div style={S.infoRow}><span style={{ color: '#4e5e78' }}>Method</span><span style={{ fontFamily: 'DM Mono, monospace', color: '#e8ecf4', fontSize: 11 }}>kit.send() on Arc_Testnet</span></div>
              <div style={S.infoRow}><span style={{ color: '#4e5e78' }}>Token</span><span style={{ color: '#e8ecf4' }}>USDC</span></div>
              <div style={{ ...S.infoRow, borderBottom: 'none' }}><span style={{ color: '#4e5e78' }}>Benefit</span><span style={{ color: '#22c55e', fontSize: 11 }}>Auto approve + send in 1 call</span></div>
              <div style={{ marginTop: 12, background: '#161e2d', borderRadius: 8, padding: '10px 12px', fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#8b9ab8', lineHeight: 1.7 }}>
                <span style={{ color: '#4e5e78' }}>// Circle App Kit send</span><br/>
                <span style={{ color: '#38bdf8' }}>const</span> result = <span style={{ color: '#38bdf8' }}>await</span> kit.<span style={{ color: '#4f7ef8' }}>send</span>({'{'}<br/>
                &nbsp; from: {'{'} adapter, chain: <span style={{ color: '#22c55e' }}>"Arc_Testnet"</span> {'}'},<br/>
                &nbsp; to: <span style={{ color: '#22c55e' }}>"{corridor.address.slice(0,16)}..."</span>,<br/>
                &nbsp; amount: <span style={{ color: '#22c55e' }}>"{amount}"</span>,<br/>
                &nbsp; token: <span style={{ color: '#22c55e' }}>"USDC"</span><br/>
                {'}'})
              </div>
            </div>
          </div>

          {/* CONTRACT INFO */}
          <div style={S.card}>
            <div style={S.cardHead}>
              <div style={S.cardIcon}>📋</div>
              <span style={S.cardTitle}>Contract details</span>
              <span style={{ marginLeft: 'auto', fontSize: 11, background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)', padding: '2px 8px', borderRadius: 20 }}>✓ Verified</span>
            </div>
            <div style={S.cardBody}>
              <div style={S.infoRow}><span style={{ color: '#4e5e78' }}>Contract</span><span style={{ fontFamily: 'DM Mono, monospace', color: '#4f7ef8', fontSize: 11 }}>{CONTRACT_ADDR.slice(0,10)}...{CONTRACT_ADDR.slice(-6)}</span></div>
              <div style={S.infoRow}><span style={{ color: '#4e5e78' }}>Network</span><span style={{ color: '#e8ecf4' }}>Arc Testnet (5042002)</span></div>
              <div style={S.infoRow}><span style={{ color: '#4e5e78' }}>Total TX</span><span style={{ color: '#4f7ef8', fontFamily: 'DM Mono, monospace' }}>{stats?.txCount || '—'}</span></div>
              <div style={S.infoRow}><span style={{ color: '#4e5e78' }}>Volume</span><span style={{ color: '#e8ecf4', fontFamily: 'DM Mono, monospace' }}>{stats?.volume || '—'} USDC</span></div>
              <div style={{ ...S.infoRow, borderBottom: 'none' }}>
                <span style={{ color: '#4e5e78' }}>Explorer</span>
                <a href={`${ARC_EXPLORER}/address/${CONTRACT_ADDR}`} target="_blank" style={{ fontSize: 11, color: '#4f7ef8' }}>View on ArcScan ↗</a>
              </div>
            </div>
          </div>

          {/* TX HISTORY */}
          <div style={S.card}>
            <div style={S.cardHead}>
              <div style={S.cardIcon}>📜</div>
              <span style={S.cardTitle}>Recent transfers</span>
              <span style={{ marginLeft: 'auto', fontSize: 11, color: '#4e5e78' }}>{txHistory.length > 0 ? txHistory.length + ' transfers' : ''}</span>
            </div>
            <div style={{ padding: '0 1.25rem' }}>
              {txHistory.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: '#4e5e78', fontSize: 13 }}>
                  Connect wallet to load transfer history.
                </div>
              ) : txHistory.map((tx, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i < txHistory.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <span style={{ fontSize: '1.2rem' }}>{flags[tx.country] || '🌍'}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#e8ecf4' }}>{tx.country}</div>
                    <div style={{ fontSize: 11, color: '#4e5e78', fontFamily: 'DM Mono, monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tx.memo}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#38bdf8', fontFamily: 'DM Mono, monospace' }}>{parseFloat(tx.amount).toFixed(4)} USDC</div>
                    <a href={`${ARC_EXPLORER}/tx/${tx.txHash}`} target="_blank" style={{ fontSize: 11, color: '#4e5e78' }}>view ↗</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '2rem', textAlign: 'center', color: '#4e5e78', fontSize: 12 }}>
        TeerPay · Arc App Kit + Smart Contract · Built by <strong style={{ color: '#8b9ab8' }}>Teerast</strong>
        {' · '}
        <a href="https://github.com/Madaprtma/teerpay-web" target="_blank">GitHub</a>
        {' · '}
        <a href={`${ARC_EXPLORER}/address/${CONTRACT_ADDR}`} target="_blank">Contract</a>
      </footer>
    </>
  )
}
