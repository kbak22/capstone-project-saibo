import { MediaRenderer } from "@thirdweb-dev/react";

function ImageDisplay({ isImageGenerated, isLoading, generatedImage, imagePrompt }) {
    if (!isImageGenerated) {
        return <h3>{isLoading ? "Generating..." : "Enter your prompt and click generate"}</h3>;
    }

    return (
        <div className="generated-image-container">
            <MediaRenderer src={generatedImage} alt={imagePrompt} />
        </div>
    );
}

export default ImageDisplay;
