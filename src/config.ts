import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "5v1yCPsYwgQAxbyCtndk1A4VutrTV6FPdBJX6Eqzyq6b"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

// "qasJ6jhgtngKk2QnEPdDjuFH8NMoM58W8TxPBXAChPY"
// "3zwFR3spiwbSSMtvVKG2bRT6ttqFoC3MHCafGP8ZrdLz"
// "DAA8yRLu7acVs3kxaTyCjoEjNWGinLaCKVhDY29ASNua"

export const whitelistedWallets = [
  "53VVFtLzzi3nL2p1QF591PAB8rbcbsirYepwUphtHU9Q",
  "85gHs1pKkZcNCDEbcfxqhfFNPWCsNFqPTMMbTQARspWy",
  "FXoth7ba7LALmJGFaidCcMnhsxEagBDBDKCmkpr2QuDr",
  "232Z5QNvQ4wRyraGWFpC5i3HEbqozEWgBCV95eWASaG1",
  "D8ivzpXkG66VknRdVjEF1HjqS3T1tzcqraVR6FYaeLsV",
  "sTAKERL4U8fbn2nUte6rPVdcrz2z3fEh1adQEDrGULr",
];

export const collectionImageURL =
  process.env.NEXT_PUBLIC_COLLECTION_IMAGE_URL || "https://cdn.discordapp.com/attachments/1051281685234327613/1119301973531959476/download_3.png";

export const collectionTitle =
  process.env.NEXT_PUBLIC_COLLECTION_TITLE || "HNTDenver BombSquad";

export const collectionDescription =
  process.env.NEXT_PUBLIC_COLLECTION_DESCRIPTION || "Each NFT in this collection represents the contribution of 1SOL toward the permanent acquisition of the HeliumDenver Portals convention space.";

export const tokenType =
  process.env.NEXT_PUBLIC_TOKEN_TYPE || "Token";

export const websiteURL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "#";

export const twitterURL =
  process.env.NEXT_PUBLIC_TWITTER_URL || "#";

export const discordURL =
  process.env.NEXT_PUBLIC_DISCORD_URL || "#";