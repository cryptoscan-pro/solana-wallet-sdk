import { Keypair } from "@solana/web3.js";

export function createWallet(): Keypair {
    return Keypair.generate();
}
