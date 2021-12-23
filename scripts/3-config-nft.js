import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x54db8ACE0258EAFa602cBE8420c84e1F436d0cC6",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Just Keep Swimming Dory",
        description: "This NFT will give you access to NadoDAO!",
        image: readFileSync("scripts/assets/dory_nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()