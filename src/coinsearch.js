import React from 'react'
import Coin from './Coin';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Coinsearch = () => {
    const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect (() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res => {

     setCoins(res.data) //data from api
    
     }).catch(error => console.log(error))
  }, []); // empty string is for rendering for one time
  

  const handleChanger = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
 <div className="coin-search">Search a Currency
        <div className="coin-text">
          <form>
            <input 
            type="text" 
            placeholder="Search.." 
            className="coin-input" 
            onChange={handleChanger} />
          </form>
           <p className="slide-message">SWIPE <i class="fa fa-angle-double-right" ></i></p>
        </div>
      </div>
      {filteredCoins.map(coin => {
        return (
         <div>
         
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol} 
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume} />
          </div>
        )
      })}<div className="footer">
            <p>In <span>cryptography</span> we trust.</p>
        </div>
        </div>
        
    )}

export default Coinsearch
