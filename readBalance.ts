// import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"));
// const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
// const balance = await connection.getBalance(address);

// console.log(`The balance of the account at ${address} is ${balance} lamports`); 
// console.log(`✅ Finished!`)

import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("GE8uaT9iiQ3RbGgwozERcLyZ8bPzz7afwKEFWWcXNwvq");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);

// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// const suppliedPublicKey = process.argv[2];
// if (!suppliedPublicKey) {
//   throw new Error("Provide a public key to check the balance of!");
// }

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const publicKey = new PublicKey(suppliedPublicKey);

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(
//   `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
// );

//31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5