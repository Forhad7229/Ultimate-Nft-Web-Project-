const hre = require("hardhat");

async function main() {
    const NFT = await hre.ethers.getContractFactory("NFT"); // contract factory
    const nft = await NFT.deploy(); // deploy contract
    await nft.deployed();
    console.log("NFT deployed to:", nft.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
