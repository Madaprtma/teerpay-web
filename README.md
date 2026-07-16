# TeerPay v3 — Arc App Kit + Smart Contract

Cross-border USDC remittance dApp on Arc Testnet, built with:
- **Circle App Kit SDK** (`@circle-fin/app-kit`) — `kit.send()` on Arc_Testnet
- **TeerPayRemittance.sol** — deployed smart contract at `0x5FeD5f971dE23683D1544857DC2F238962822107`
- **React + Vite** — modern frontend
- **viem** — Ethereum client library

## Features

- Connect MetaMask → auto-switch to Arc Testnet
- Two send modes: **App Kit** (Circle SDK) or **TeerPay Contract** (direct smart contract)
- 5 remittance corridors: Indonesia, Philippines, Vietnam, Nigeria, India
- Live contract stats (total TX, volume)
- Transfer history from on-chain `RemittanceSent` events
- Live app code preview of `kit.send()` call

## Stack (DeFi track criteria)

| Requirement | Implementation |
|---|---|
| Meaningful use of Arc + USDC | ✅ All transfers on Arc Testnet in USDC |
| App Kits | ✅ `@circle-fin/app-kit` — `kit.send()` on `Arc_Testnet` |
| Smart contract | ✅ `TeerPayRemittance.sol` deployed + verified |
| Payment flows | ✅ Multi-corridor remittance with on-chain memo |
| Web app | ✅ Live at `madaprtma.github.io/teerpay-web` |

## Setup

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

Push to `main` → GitHub Actions builds and deploys automatically.

Or manual build:
```bash
npm run build
# upload /dist folder to GitHub Pages
```

## Contract

- Address: `0x5FeD5f971dE23683D1544857DC2F238962822107`
- Network: Arc Testnet (Chain ID: 5042002)
- Explorer: https://testnet.arcscan.app/address/0x5FeD5f971dE23683D1544857DC2F238962822107

## Built by Teerast
