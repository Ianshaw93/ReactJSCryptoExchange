import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import axios from 'axios';
import './App.css';
import Coin from './Coin';
import coinGecko from "./apis/coinGecko";
import homePageParams from './apis/homePageParams.json'

import HomePage from './pages/HomePage'
import CoinDetailPage from './pages/CoinDetailPage'
// const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage}/>
      <Route path="/coins/:id" component={CoinDetailPage} />
      
    </BrowserRouter>
    
  );
}

export default App;
