import { Connection, PublicKey, type Commitment } from "@solana/web3.js";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import BigNumber from "bignumber.js";

const COIN_LAMPORTS = 10 ** 6;
const SOL_LAMPORTS = 10 ** 9;

export const getBalance = async (
	walletAddress: string,
	coinAddress?: string,
	connection = new Connection('https://api.mainnet-beta.solana.com/'),
	commitment?: Commitment,
): Promise<number> => {
	try {
		const walletKey = new PublicKey(walletAddress);

		if (!coinAddress) {
			const lamports = await connection.getBalance(walletKey, commitment || 'processed')
			return lamports / SOL_LAMPORTS;
		}

		const walletAssociatedAccountKey = await getAssociatedTokenAddress(
			new PublicKey(coinAddress),
			walletKey,
		);

		const balance = await connection.getTokenAccountBalance(
			walletAssociatedAccountKey,
			commitment || 'processed'
		)

		return BigNumber(balance.value.amount).div(COIN_LAMPORTS).toNumber();
	} catch {
		return 0;
	}
}
