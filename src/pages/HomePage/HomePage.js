import { ConnectWallet, MediaRenderer, ThirdwebProvider, embeddedWallet, useAddress } from "@thirdweb-dev/react";
import { useState } from "react";
import "./HomePage.scss";
import WalletConnect from "../../Components/WalletConnect/WalletConnect";
import ImagePrompt from "../../Components/ImagePrompt/ImagePrompt";
import ImageDisplay from "../../Components/ImageDisplay/ImageDisplay";


function HomePage() {

    const addreess = useAddress();

    const [imagePrompt, setImagePrompt] = useState("");
    const [generatedImage, setGeneratedImage] = useState("");
    const [isImageGenerated, setIsImageGenerated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isMinting, setIsMinting] = useState(false);
    const [isMinted, setIsMinted] = useState(false);

    return (
        <div className="homepage">


            <div className="homepage-title">
                <h1>SAIBO</h1>
            </div>

            <WalletConnect />

            <ImagePrompt
                isImageGenerated={isImageGenerated}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                imagePrompt={imagePrompt}
                setImagePrompt={setImagePrompt}
                setIsImageGenerated={setIsImageGenerated}
                setGeneratedImage={setGeneratedImage}
            />


            <ImageDisplay
                isImageGenerated={isImageGenerated}
                isLoading={isLoading}
                generatedImage={generatedImage}
                imagePrompt={imagePrompt}
            />

        </div>
    )
}

export default HomePage;