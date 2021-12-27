import React, { useState, useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const NFT_CONTRACT_ADDRESS = '0x564e6588dafa2f79c5805e07860cb869aedb33d9';

export default function App() {
  const { authenticate, isAuthenticated, logout, isInitialized, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [isNFTsLoaded, setIsNFTsLoaded] = useState(false);
  const [haveNFTs, setHaveNFTs] = useState(false);
  const [NFTsList, setNFTsList] = useState([]);

  useEffect(async () => {
    if (isInitialized) {
      const NFTs = await Web3Api.account.getNFTs({
        address: account,
        chain: 'polygon'
      });

      const filteredNFTs = NFTs.result.filter(item => item.token_address === NFT_CONTRACT_ADDRESS);
      if (filteredNFTs.length === 0) {
        setIsNFTsLoaded(true);
        setHaveNFTs(false);
      }
      if (filteredNFTs.length > 0) {
        setIsNFTsLoaded(true);
        setHaveNFTs(true);
        setNFTsList(filteredNFTs);
        // window.console.log(filteredNFTs);
      }
    }
  }, [isInitialized, isAuthenticated]);

  return (
    <div style={{ margin: '3rem auto', maxWidth: '400px', textAlign: 'center', border: '1px solid #ccc', borderRadius: '1rem', padding: '2rem' }}>

      <h1>
        Добро пожаловать
      </h1>
      <br/>

      {!isAuthenticated && (
        <div>
          <button onClick={async () => {
            await authenticate();
          }}>Подключить кошелек</button>
        </div>
      )}

      {isAuthenticated && <>

        {!isNFTsLoaded && 'Загрузка...'}

        {isNFTsLoaded && !haveNFTs && <>
          <h4>Что бы войти нужно</h4>
          <br/>
          <a href="https://digitalplayer.io/" target="_blank">заминтить гриб</a>
        </>}

        {isNFTsLoaded && haveNFTs && <>
          <h4>Ваши грибы:</h4>
          {NFTsList.map((nft, i) => `#${nft.token_id} `)}
          <br/>
          <br/>
          <a href="#">Войти в клуб</a>
        </>}
      </>}

      {isAuthenticated && (
        <div>
          <br/>
          <br/>
          <hr/>
          <br/>
          <button onClick={() => logout()}>Отключиться</button>
        </div>
      )}

    </div>
  )
}