# @cryptoscan/solana-wallet-sdk

Utility to work with solana wallets

To install package:

```bash
npm install @cryptoscan/solana-wallet-sdk
```

Usage

```javascript
import { createWallet, getBalance } from '@cryptoscan/solana-wallet-sdk';

const wallet = createWallet();

console.log('Private key: ' + getPrivateKey(wallet))
console.log('Public key: ' + getPublicKey(wallet))

getBalance(wallet).then((balance) => {
   console.log('Balance: ' + balance);
});

getBalance(wallet, process.env.COIN_ADDRESS).then((balance) => {
   console.log('Coin balance: ' + balance);
});
```

## Docs

- `createWallet(): Keypair`
- `getBalance(wallet: Keypair, coinAddress: string): Promise<number>`
- `getPrivateKey(wallet: Keypair): string`
- `getPublicKey(wallet: Keypair): string`
- `makeWallets(path: string, count: number): void`

## Deploy

To install dependencies:

```bash
npm install
```

To build:

```bash
npm build
```

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
