import { ConnectWallet, MediaRenderer, ThirdwebProvider, embeddedWallet, useAddress } from "@thirdweb-dev/react";
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


            <div className="homepage-title">
                <h1>SAIBO</h1>
            </div>



            <div className="homepage__claimbutton">

                <ConnectWallet />
            </div>
            <div className="homepage__prompt-container">
            <div className="homepage__prompt-container__field">
                {isImageGenerated ? (
                    <></>
                ) : (
                    <>
                        <input
                        className="homepage__prompt-container__field__input"
                            type="text"
                            placeholder="Enter your image prompt"
                            value={imagePrompt}
                            onChange={(e) => setImagePrompt(e.target.value)}
                        />
                    </>
                )}
            </div>
                {!isImageGenerated ? (
                    <h3>
                        {isLoading
                            ? "Generating..."
                            : "Enter your prompt and click generate"}
                    </h3>

                ) : (
                    <div className="generated-image-container">
                        <MediaRenderer
                            src={generatedImage}
                            alt={imagePrompt}
                        />
                    </div>
                )}


            </div>

        </div>
    )
}

export default HomePage;