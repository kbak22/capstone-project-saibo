import React from "react";
import { useState } from "react";
import axios from "axios";


function ImagePrompt({ isImageGenerated, isLoading, imagePrompt, setImagePrompt, setIsLoading, setGeneratedImage, setIsImageGenerated }) {
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
            console.log(data); 

            if (data && Array.isArray(data) && data.length > 0) {
                const base64Image = `data:image/png;base64,${data[0].b64_json}`;
                setGeneratedImage(base64Image);
                setIsImageGenerated(true);
                setIsLoading(false);
            } else {
                // Handle the case where data.data is not as expected
                throw new Error('Response from API is not in the expected format');
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
