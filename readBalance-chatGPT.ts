import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

async function getWalletBalance(walletAddress: string): Promise<number> {
    try {
        // Check if the provided wallet address is valid
        const publicKey = new PublicKey(walletAddress);

        // Connect to Solana Mainnet
        const connection = new Connection('https://api.devnet.solana.com');

        // Get the balance
        const balance = await connection.getBalance(publicKey)/LAMPORTS_PER_SOL;
        
        return balance;
    } catch (error) {
        if (error instanceof TypeError && error.message.includes('provided string was not a public key')) {
            throw new Error('Invalid wallet address provided.');
        } else {
            throw error;
        }
    }
}

const walletAddress = "GE8uaT9iiQ3RbGgwozERcLyZ8bPzz7afwKEFWWcXNwvq";

getWalletBalance(walletAddress)
    .then(balance => console.log(
        `💰 Finished! The balance for the wallet at address ${walletAddress} is ${balance} SOL`
    ))
    .catch(error => console.error('Error:', error.message));