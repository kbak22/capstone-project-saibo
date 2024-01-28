import { ConnectWallet, ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";




function ClaimPage() {
    return(
        <div>
            <h1>Claim Page</h1>
            <ConnectWallet />
        </div>
    )
};

export default ClaimPage;