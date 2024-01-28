import { ConnectWallet, ThirdwebProvider, embeddedWallet, metamaskWallet } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";


function App() {
    return (
        <ThirdwebProvider
            activeChain={Sepolia}
            clientId={process.env.REACT_APP_PUBLIC_CLIENT_ID}
            supportedWallets={[embeddedWallet(), metamaskWallet()]}
        >
            <HomePage />


        </ThirdwebProvider>
    )

}

export default App;

