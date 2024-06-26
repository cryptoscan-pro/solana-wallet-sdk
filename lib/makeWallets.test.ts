import { describe, test, expect } from 'bun:test';
import { makeWallets } from './makeWallets';
import { existsSync, readFileSync, rmSync } from 'fs';

describe('makeWallets', () => {
    test('makeWallets', () => {
        const wallets = makeWallets('./var/test_wallets.txt', 10);

        console.log(wallets.map((w) => w.publicKey.toString()));

        const fileContent = readFileSync('./var/test_wallets.txt').toString();
        const date = new Date();
        const savedFileContent = readFileSync(`./var/saved_wallets/${date}.txt`).toString();
        const content = wallets.map((w) => w.secretKey.toString()).join('\n');

        expect(wallets.length).toBe(10);
        expect(fileContent).toBe(content)
        expect(existsSync(`./var/saved_wallets/${date}.txt`)).toBe(true);
        expect(savedFileContent).toBe(content)
    })
    rmSync('./var/test_wallets.txt')
})
