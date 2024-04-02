import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
  } from "@solana/web3.js";
  import "dotenv/config"
  import { getKeypairFromEnvironment } from "@solana-developers/helpers";

  //public key of the receiver 
   const suppliedToPubkey = new PublicKey('31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5');
  if (!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
  }
//public key of the sender from the .env file 
//we get the key using getKeypair from Envionment fuction
  const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
  console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
  const toPubkey = new PublicKey(suppliedToPubkey);

  //we make a new connection to devnet
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`
  );

  const transaction = new Transaction();
  const LAMPORTS_TO_SEND = 50000;
  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
  });

  transaction.add(sendSolInstruction);

  const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
  ]);
  
  console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `
  );
  console.log(`Transaction signature is ${signature}!`);