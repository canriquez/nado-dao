import { useEffect, useMemo, useState } from "react";

// import thirdweb
import { useWeb3 } from "@3rdweb/hooks";
import DoryLogo from "./assets/dory_logo_sm.gif"

const App = () => {
  // Use the connectWallet hook thirdweb gives us.
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address)

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to NadoDAO</h1>
        <div className="landing-logo-area">
          <img className="dory-logo-sm" src={DoryLogo} alt="Nado logo" />;
          <div className="logo-motto">Just keep swimming</div>
        </div>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }
  
  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>);
};

export default App;