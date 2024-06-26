import type { Keypair } from "@solana/web3.js";
import { createWallet } from "./createWallet";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import bs58 from "bs58";

const WALLETS_PATH = process.env.WALLETS_PATH || './var/saved_wallets';

if (!existsSync(WALLETS_PATH)) {
    mkdirSync(WALLETS_PATH);
}

export const makeWallets = (path: string, count: number): Keypair[] => {
    const wallets: Keypair[] = [];
    for (let i = 0; i < count; i++) {
        wallets.push(createWallet());
    }

    writeFileSync(path, wallets.map((w) => bs58.encode(w.secretKey)).join('\n'))
    writeFileSync(`${WALLETS_PATH}/${new Date()}.txt`, wallets.map((w) => bs58.encode(w.secretKey)).join('\n'))

    return wallets;
}
