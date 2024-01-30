import { ConnectWallet, ThirdwebProvider, embeddedWallet, metamaskWallet } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./App.scss";


function App() {
    return (
        <ThirdwebProvider
            activeChain={Sepolia}
            clientId={process.env.REACT_APP_PUBLIC_CLIENT_ID}
            supportedWallets={[embeddedWallet(), metamaskWallet()]}
        ><Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
        </Router>
            


        </ThirdwebProvider>
    )

}

export default App;

