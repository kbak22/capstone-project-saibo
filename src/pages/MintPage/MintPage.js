import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './MintPage.scss';

function MintPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { generatedImage, imagePrompt } = location.state || {};

    const handleRegenerate = () => {
        navigate('/');
    }

    const handleMint = () => {

        console.log('Minting the image...');

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
                <button className="mint-button" onClick={handleMint}>Mint</button>
            </div>
        </div>
    );
}

export default MintPage;
