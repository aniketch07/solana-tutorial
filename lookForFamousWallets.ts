
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
const connection = new Connection("https://api.mainnet.solana.com", "confirmed");
const famousWallets = ['52C9T2T7JRojtxumYnYZhyUmrN7kqzvCLc4Ksvjk7TxD', 'shaq.sol', 'mccann.sol'];

for (const wallet of famousWallets) {
    try {
        const publicKey = await PublicKey.findProgramAddress([Buffer.from(wallet)], new PublicKey('Seed1111111111111111111111111111111111111'));
        const balance = await getWalletBalance(publicKey[0].toBase58());
        console.log(`Wallet ${wallet}: Balance ${balance} SOL`);
    } catch (error) {
        console.error(`Error looking up wallet ${wallet}:`, error.message);
    }
}


function getWalletBalance(arg0: string) {
    throw new Error("Function not implemented.");
}
