import { readFileSync } from "fs";
import type { Keypair } from "@solana/web3.js";
import { getWallet } from "./getWallet";

export const getWallets = (path: string): Keypair[] => {
    const keysStr = readFileSync(path).toString();
    const keys = keysStr.split('\n').filter((k) => !!k);
    const wallets = keys.map((k) => getWallet(k));

    if (!wallets?.length) {
        throw new Error(`Missing wallets in the ${path}`);
    }

    return wallets;
}
