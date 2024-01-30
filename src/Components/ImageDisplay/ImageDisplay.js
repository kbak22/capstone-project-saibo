import { MediaRenderer } from "@thirdweb-dev/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ImageDisplay.scss";

function ImageDisplay({ isImageGenerated, isLoading, generatedImage, imagePrompt }) {
    const navigate = useNavigate();

    if (!isImageGenerated || isLoading) {
        return <h3>{isLoading ? "Generating..." : "Enter your prompt and click generate"}</h3>;
    }

    if (typeof generatedImage === "string" && generatedImage.startsWith("data:image")) {
        console.log("Generated Image:", generatedImage);
        return (
            <div className="generated-image-container">
                <img src={generatedImage} alt={imagePrompt || "Generated Image"} />
            </div>
        );


    }
    setTimeout(() => navigate("/error"), 0);

    return null;
}




export default ImageDisplay;
