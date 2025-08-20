import { useState } from "react";
import { ethers } from "ethers";
import NFT from "./NFT.json";

function App() {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [tokenURI, setTokenURI] = useState("");

    async function connectWallet() {
        const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });
        setCurrentAccount(account);
    }

    async function mintNFT() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract("NFT_CONTRACT_ADDRESS", NFT.abi, signer);
        const tx = await contract.mint(tokenURI);
        await tx.wait();
        alert("NFT Minted!");
    }

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            <input value={tokenURI} onChange={e => setTokenURI(e.target.value)} placeholder="Enter NFT URL"/>
            <button onClick={mintNFT}>Mint NFT</button>
        </div>
    );
}

export default App;
