import { MediaRenderer } from "@thirdweb-dev/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ImageDisplay.scss";

function ImageDisplay({ isImageGenerated, isLoading, generatedImage, imagePrompt }) {
    const navigate = useNavigate();

    if (!isImageGenerated || isLoading) {
        return <h3>{isLoading ? "Generating..." : "Enter your prompt and click generate"}</h3>;
    }

    // if (Array.isArray(generatedImage) && generatedImage.length > 0 && generatedImage[0].b64_json) {
    //     const base64Image = generatedImage[0].b64_json;

    //     console.log("Base64 Image:", base64Image);

        if (typeof generatedImage === "string" && generatedImage.startsWith("data:image")) {
            console.log("Generated Image:", generatedImage);
            return (
                <div className="generated-image-container">
                    <img src={generatedImage} alt={imagePrompt || "Generated Image"} />
                </div>
            );


        }
    }

    // setTimeout(() => navigate("/error"), 0);

    // return null;


export default ImageDisplay;
