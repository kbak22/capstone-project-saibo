import { ConnectWallet, ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";
import "./ClaimPage.scss";

function ClaimPage() {
    return(
        <div>
            <h1>Claim Page</h1>
            <ConnectWallet />
        </div>
    )
};

export default ClaimPage;