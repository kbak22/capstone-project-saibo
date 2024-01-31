import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useSDK, useAddress } from '@thirdweb-dev/react';
import './MintPage.scss';

function MintPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const sdk = new ThirdwebSDK("sepolia");
    const address = useAddress();
    const { generatedImage, imagePrompt } = location.state || {};
    const [isMinting, setIsMinting] = useState(false);
    const [isMinted, setIsMinted] = useState(false);


    const handleRegenerate = (imageData) => {
        navigate('/');
    }

    const handleMint = async () => {
        setIsMinting(true);
        try {

            const base64Response = await fetch(generatedImage);
            const blob = await base64Response.blob();
            const file = new File([blob], "image.png", { type: "image/png" });
            const imageURI = await sdk.storage.upload(file);

            if (!imageURI) {
                throw new Error('Failed to upload image');
            }

            const response = await fetch("http://localhost:8080/api/mintAPI/mint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userImage: imageURI,
                    address: address,
                    prompt: imagePrompt,
                }),
            });


            if (!response.ok) {
                throw new Error('Failed to mint image');
            }
            else {
                setIsMinting(false);
                setIsMinted(true);
                alert ("NFT minted successfully!");
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
