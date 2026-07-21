# TeerPay — Cross-border USDC Remittance on Arc Testnet

Full-stack USDC remittance protocol built on Arc — Circle's stablecoin-native L1. Exposes reusable primitives across three layers: Solidity contract, React frontend with Circle App Kit, and a Python automation bot.

> Built for the [Encode Club Build on Arc Hackathon](https://www.encode.club/) — DeFi Track  
> Live site: **https://madaprtma.github.io/teerpay-web**

---

## Repository Structure

```
teerpay-web/                          # This repo — frontend + contract
├── contracts/
│   └── TeerPayRemittance.sol         # Solidity remittance contract (source)
├── src/
│   ├── App.jsx                       # React frontend (single-file app)
│   └── config.js                     # Chain config, ABIs, corridors
└── README.md

teerpay-bot/                          # Standalone bot repo
└── https://github.com/Madaprtma/teerpay-bot
    ├── teerpay_conditional_bot.py    # Conditional payment bot
    ├── conditions.py                 # FX / schedule / balance filters
    └── stablefx.py                   # StableFX EURC rate fetcher
```

---

## Stack

| Layer | Technology |
|-------|-----------|
| Smart contract | `TeerPayRemittance.sol` — Solidity 0.8.20 |
| Frontend | React + Vite + viem |
| Circle SDK | `@circle-fin/app-kit`, `@circle-fin/adapter-viem-v2`, `@circle-fin/unified-balance-kit` |
| FX rates | Circle StableFX (EURC/USDC) via `stablefx.py` |
| Chain | Arc Testnet (Chain ID: 5042002) |
| Token | USDC (`0x3600000000000000000000000000000000000000`) |

---

## Smart Contract

**TeerPayRemittance.sol** — deployable ERC-20 remittance contract with:
- Recipient validation + self-send protection
- On-chain memo storage per transfer
- `RemittanceSent` event emission (indexed by sender)
- Admin controls: pause, min/max amount, ownership transfer
- `getStats()` view function for live dashboard

**Deployed:** `0x5FeD5f971dE23683D1544857DC2F238962822107`  
**Explorer:** [View on ArcScan](https://testnet.arcscan.app/address/0x5FeD5f971dE23683D1544857DC2F238962822107)

Fork the contract as a base for any USDC payment flow on Arc:

```solidity
function sendRemittance(
    address recipient,
    uint256 amount,
    string calldata country,
    string calldata currency,
    string calldata memo
) external notPaused;
```

---

## Circle Products Used

| Product | Usage |
|---------|-------|
| **App Kit** (`kit.send()`) | One-call USDC transfer on Arc_Testnet |
| **Unified Balance Kit** | Cross-chain USDC balance aggregation |
| **StableFX** | EURC/USDC rate as FX anchor for conditional payments |
| **USDC on Arc** | Native payment token + gas |
| **EURC on Arc** | FX rate source via USDC/EURC pair |

---

## Features

- Connect MetaMask → auto-switch to Arc Testnet
- **Two send modes:** App Kit (`kit.send()`) or TeerPay Contract (direct)
- **Unified Balance panel** — view USDC balance across all chains via Circle Gateway
- **5 remittance corridors:** Indonesia 🇮🇩, Philippines 🇵🇭, Vietnam 🇻🇳, Nigeria 🇳🇬, India 🇮🇳
- Live contract stats (total TX, volume) from `getStats()`
- Transfer history from on-chain `RemittanceSent` events
- On-chain memo stored per transfer

---

## Hackathon Criteria (DeFi Track)

| Requirement | Implementation |
|---|---|
| Meaningful use of Arc + USDC | ✅ All transfers on Arc Testnet in USDC |
| App Kits | ✅ App Kit + Unified Balance Kit + viem adapter |
| Smart contract | ✅ `TeerPayRemittance.sol` deployed + verified |
| Payment flows | ✅ Multi-corridor remittance with on-chain memo |
| Web app | ✅ Live at `madaprtma.github.io/teerpay-web` |
| Open source | ✅ Contract source in `/contracts`, bot in teerpay-bot |

---

## Quick Start

```bash
git clone https://github.com/Madaprtma/teerpay-web.git
cd teerpay-web
npm install
cp .env.example .env   # add your RPC URL
npm run dev
```

Open `http://localhost:5173/teerpay-web/`

---

## Deploy

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically.

---

## Contract Addresses (Arc Testnet)

| Contract | Address |
|----------|---------|
| TeerPayRemittance | `0x5FeD5f971dE23683D1544857DC2F238962822107` |
| USDC | `0x3600000000000000000000000000000000000000` |
| EURC | `0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a` |
| StableFX FxEscrow | `0x867650F5eAe8df91445971f14d89fd84F0C9a9f8` |

---

## Related

- **Bot repo:** [teerpay-bot](https://github.com/Madaprtma/teerpay-bot) — Python conditional payment bot + StableFX integration
- **Explorer:** [ArcScan](https://testnet.arcscan.app)
- **Reference:** [arc-commerce](https://github.com/circlefin/arc-commerce) | [arc-p2p-payments](https://github.com/circlefin/arc-p2p-payments)

---

## License

MIT — fork freely, build on top, keep it open.
