const Moralis = require("moralis").default;

const fs = require("fs");

async function uploadToIpfs() {
  await Moralis.start({
    apiKey: "QPnwCYfzEm2tU1IHG6KsK9jWYCGfCIjTVtIPFwpWXsv7bfsMK6vzjZovsdxalrLG"
  });

  const uploadArray = [
    {
      path: "abc.avif",
      content: fs.readFileSync("./abc.avif", { encoding: "base64" }),
    },
  ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({
    abi: uploadArray,
  });

  console.log(response.result);
}

uploadToIpfs();