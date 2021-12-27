import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";
import App from './App';
import './index.css';

const SERVER_URL = 'https://28lv8iyzigzr.usemoralis.com:2053/server';
const APP_ID = '7eaW1oBLqUigZpEOCl6ri2e9v538jxTbpMfd1q5A';
const NFT_CONTRACT_ADDRESS = '0x820Eb6837B36d82B4B6d912a7702C5dA31259Df9';

ReactDOM.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <App />
  </MoralisProvider>,
  document.getElementById("root"),
);