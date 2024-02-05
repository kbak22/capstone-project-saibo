// import { useEffect, useState } from 'react';
// import { ThirdwebSDK } from '@thirdweb-dev/sdk';
// import { useLocation } from 'react-router-dom';
// import WalletConnect from "../../Components/WalletConnect/WalletConnect";

// const sdk = new ThirdwebSDK("sepolia");

// const fetchNFTs = async (address) => {
//     try {
//         const nftModule = sdk.getNFTModule("0x803fdE9645475cEa61f270e563AE835D9f8730da");
//         const nfts = await nftModule.getOwned(address);
//         return nfts;
//     } catch (error) {
//         console.error("Failed to fetch NFTs:", error);
//         return [];
//     }
// };



// function ViewNFTs() {
//     const { state } = useLocation();
//     const address = state?.address;
//     const [nfts, setNfts] = useState([]);

//     useEffect(() => {
//         if (address) {
//             fetchNFTs(address).then(setNfts);
//         }
//     }, [address]);

//     return (
//         <div>
//             <WalletConnect />
//             <h2>Your NFTs</h2>
//             <div>
//                 {nfts.map((nft, index) => (
//                     <div key={index}>
//                         <img src={nft.metadata.image} alt={nft.metadata.name} />
//                         <p>{nft.metadata.name}</p>
//                         <p>{nft.metadata.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ViewNFTs;