import { ConnectWallet, ThirdwebProvider, embeddedWallet, useAddress } from "@thirdweb-dev/react";
import { useState } from "react";
import "./HomePage.scss";



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
            <div className="homepage-container">

                <div className="homepage-title">
                    <h1>SAIBO</h1>
                </div>

            </div>

            <div className="claimbutton-container">

                <ConnectWallet />

                {!isImageGenerated ? (
                    <div className="loading-container">
                        <h3>
                            {isLoading
                                ? "Generating..."
                                : "Enter a prompt below and click generate"}
                        </h3>
                    </div>
                )


               




            </div>
        </div>
    )
}

export default HomePage;