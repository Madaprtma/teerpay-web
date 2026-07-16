// Arc Testnet config
export const ARC_CHAIN_ID  = 5042002
export const ARC_RPC       = 'https://rpc.testnet.arc.network'
export const ARC_EXPLORER  = 'https://testnet.arcscan.app'
export const USDC_ADDRESS  = '0x3600000000000000000000000000000000000000'
export const CONTRACT_ADDR = '0x5FeD5f971dE23683D1544857DC2F238962822107'
export const USDC_DECIMALS = 6

// Arc chain config for viem (used by App Kit)
export const arcTestnet = {
  id: ARC_CHAIN_ID,
  name: 'Arc Testnet',
  nativeCurrency: { name: 'USD Coin', symbol: 'USDC', decimals: 18 },
  rpcUrls: { default: { http: [ARC_RPC] } },
  blockExplorers: { default: { name: 'ArcScan', url: ARC_EXPLORER } },
  testnet: true,
}

// Remittance corridors
export const CORRIDORS = [
  { flag: '🇮🇩', country: 'Indonesia',   currency: 'IDR', address: '0x018fBE6bB41b6bA47AfBC499b60375117A9373ea' },
  { flag: '🇵🇭', country: 'Philippines', currency: 'PHP', address: '0xc68cAA6C024c7d844b0195EBE79aCc9820B4a1a4' },
  { flag: '🇻🇳', country: 'Vietnam',     currency: 'VND', address: '0xF4E12151430a7D761EF355079f97c7c83AEf512c' },
  { flag: '🇳🇬', country: 'Nigeria',     currency: 'NGN', address: '0xD4F8F759B80365966fB137E9D27640B5e379ADf6' },
  { flag: '🇮🇳', country: 'India',       currency: 'INR', address: '0x384f05d832fDebE47C1030CC6935AE3a4325eCd0' },
]

// TeerPayRemittance ABI (minimal)
export const CONTRACT_ABI = [
  {
    name: 'sendRemittance',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount',    type: 'uint256' },
      { name: 'country',   type: 'string'  },
      { name: 'currency',  type: 'string'  },
      { name: 'memo',      type: 'string'  },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    name: 'getStats',
    type: 'function',
    inputs: [],
    outputs: [
      { name: '_totalVolume',  type: 'uint256' },
      { name: '_totalTxCount', type: 'uint256' },
      { name: '_minAmount',    type: 'uint256' },
      { name: '_maxAmount',    type: 'uint256' },
      { name: '_paused',       type: 'bool'    },
    ],
    stateMutability: 'view',
  },
  {
    name: 'RemittanceSent',
    type: 'event',
    inputs: [
      { name: 'sender',    type: 'address', indexed: true  },
      { name: 'recipient', type: 'address', indexed: true  },
      { name: 'amount',    type: 'uint256', indexed: false },
      { name: 'country',   type: 'string',  indexed: false },
      { name: 'currency',  type: 'string',  indexed: false },
      { name: 'memo',      type: 'string',  indexed: false },
      { name: 'timestamp', type: 'uint256', indexed: false },
    ],
  },
]

export const USDC_ABI = [
  {
    name: 'approve',
    type: 'function',
    inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }],
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    name: 'allowance',
    type: 'function',
    inputs: [{ name: 'owner', type: 'address' }, { name: 'spender', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    name: 'balanceOf',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
]
