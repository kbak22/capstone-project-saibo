import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useSDK, useAddress } from '@thirdweb-dev/react';
import WalletConnect from "../../Components/WalletConnect/WalletConnect";

import './MintPage.scss';

function MintPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const sdk = new ThirdwebSDK("sepolia", {
        clientId: "340e8df871975b459e9158a8bc24bd7f"
    });
    const address = useAddress();
    const { generatedImage, imagePrompt } = location.state || {};
    const [isMinting, setIsMinting] = useState(false);
    const [isMinted, setIsMinted] = useState(false);


    const handleRegenerate = () => {
        navigate('/');
    }

    const handleMint = async () => {
        setIsMinting(true);
        try {

            const fetchResponse = await fetch(generatedImage);
            const blob = await fetchResponse.blob();

            const file = new File([blob], "image.png", { type: "image/png" });
            const imageURI = await sdk.storage.upload(file);
            console.log(imageURI);
            console.log(file);

            if (!imageURI) {
                throw new Error("Error uploading image to IPFS");
            }

            const response = await fetch("http://localhost:8080/api/mintNFT/mint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userImage: imageURI, address})
            });


            if (!response.ok) {
                const errorData = await response.json();
                throw new Error('Failed to mint image');
            }
            
            else {
                setIsMinting(false);
                setIsMinted(true);
                alert("NFT minted successfully!");
                navigate('/');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (!generatedImage || !imagePrompt) {
            navigate('/error');
        }
    }, [generatedImage, imagePrompt, navigate]);

    return (

        <div className="mint-page">
            <WalletConnect />
            <div className="generated-image-container">
                <img src={generatedImage} alt={imagePrompt || "Generated Image"} />
            </div>
            <div className="image-actions">
                <button className="regenerate-button" onClick={handleRegenerate}>Re-generate</button>
                <button className="mint-button" onClick={handleMint}>
                    {isMinting ? "Minting..." : "Mint"}
                </button>
            </div>
        </div>
    );
}

export default MintPage;
