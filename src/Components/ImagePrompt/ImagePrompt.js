import React from "react";
import { useState } from "react";
import axios from "axios";


function ImagePrompt({ isImageGenerated, isLoading, imagePrompt, setImagePrompt, setIsLoading, setGeneratedImage }) {
    if (isImageGenerated) return null;


    const handleGenerateImage = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/openai/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: imagePrompt })
            });

            const data = await response.json();

            if (response.ok) {
                setGeneratedImage(data); 
                setIsLoading(false);
            } else {
                
                console.error('Error from server:', data);
                setIsLoading(false);
            }
        }
        catch (error) {
            console.error('Error while generating image:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className="homepage__prompt-container">
            <div className="homepage__prompt-container__field">
                <input
                    className="homepage__prompt-container__field__input"
                    type="text"
                    placeholder="Enter your image prompt"
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                />
                <button
                    className="homepage__prompt-container__field__button"
                    onClick={handleGenerateImage}
                    disabled={isLoading}
                >
                    {isLoading ? "Generating..." : "Generate"}
                </button>
            </div>
        </div>
    );
}

export default ImagePrompt;
