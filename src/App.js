import { ConnectWallet, ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";

import ClaimPage from "./pages/ClaimPage/ClaimPage";


export default function Home() {
    return (
        <ThirdwebProvider
            activeChain="sepolia"
            clientId={process.env.PUBLIC_CLIENT_ID}
            supportedWallets={[embeddedWallet()]}
        >
            <ClaimPage />


        </ThirdwebProvider>
    )

}

