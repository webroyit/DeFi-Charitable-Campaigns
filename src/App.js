import React from "react";
// import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./login";
import Header from "./navbar/header";
import Dashboard from './dashboard';
import CampaignForm from "./campaign/campaignForm";
import { Main } from "@aragon/ui";
import CampaignBoard from "./campaign/campaignsBoard";
import InvestmentProfile from "./invest";
import Wallet from "./wallet/wallet";

const App = () => {
  return (
    <div className="text-color-main">
      <HashRouter>
        <Routes>
          <Route path="/campaignForm" element={<CampaignForm />} />
          <Route path="/campaignBoard" element={<CampaignBoard />} />
          <Route path="/investmentProfile" element={<InvestmentProfile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </HashRouter>
      {/* </Main> */}
    </div>
  );
};

export default App;
