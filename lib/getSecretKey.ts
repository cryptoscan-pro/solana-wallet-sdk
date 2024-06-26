import type { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

export const getSecretKey = (wallet: Keypair): string => {
    return bs58.encode(wallet.secretKey);
}
