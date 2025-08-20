// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Ultimate NFT Contract
contract NFT is ERC721URIStorage, Ownable {
    uint public tokenCount;

    constructor() ERC721("UltimateNFT", "UNFT") {}

    // Mint a new NFT with tokenURI
    function mint(string memory _tokenURI) public returns (uint) {
        tokenCount++;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return tokenCount;
    }
}
