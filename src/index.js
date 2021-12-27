import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";
import App from './App';
import './index.css';

const SERVER_URL = 'https://ej8ky7stvp6y.usemoralis.com:2053/server';
const APP_ID = 'pPT99TKQIJEjVXpqQV7IHgNBWZO9nQIl5GdAXBUH';

ReactDOM.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <App />
  </MoralisProvider>,
  document.getElementById("root"),
);