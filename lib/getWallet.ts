import bs58 from "bs58";
import bip39 from "bip39";
import { Keypair } from '@solana/web3.js';

export const getWallet = (secret: string | Uint8Array): Keypair => {
    if (secret instanceof Uint8Array) {
        return Keypair.fromSecretKey(secret)
    }
    if (secret.includes(' ')) {
        secret = bip39.mnemonicToSeedSync(secret).toString('hex')
        secret = bs58.encode(Buffer.from(secret, 'hex'))
    }
    const secretKey = bs58.decode(secret);
    return Keypair.fromSecretKey(secretKey);
}
