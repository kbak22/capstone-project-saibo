import { ConnectWallet, ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ClaimPage from "./pages/ClaimPage/ClaimPage"


function App() {
    return (
        <ThirdwebProvider
            activeChain={Sepolia}
            clientId={process.env.REACT_APP_PUBLIC_CLIENT_ID}
            supportedWallets={[embeddedWallet()]}
        >
            <ClaimPage />


        </ThirdwebProvider>
    )

}

export default App;

