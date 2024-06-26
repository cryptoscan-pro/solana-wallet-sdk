import type { Keypair } from "@solana/web3.js";

export const getPublicKey = (wallet: Keypair): string => wallet.publicKey.toString();
