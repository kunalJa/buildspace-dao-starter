import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x86368D457949029D7a2d6Dd272A4E29cdA99Ad14",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "DAOJones Sink Graph",
        description: "This NFT will give you access to DAOJones forums",
        image: readFileSync("scripts/assets/Inkedsinkstocks.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()