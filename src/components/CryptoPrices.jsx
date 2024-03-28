import React, { Component } from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';

class CryptoPrices extends Component {
  state = {
    cryptoData: [],
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
      const { bpi } = response.data;

      // Extracting data for each currency
      const cryptoData = Object.entries(bpi).map(([currency, data]) => ({
        currencyName: currency,
        price: data.rate,
        symbol: data.symbol,
        description: data.description
      }));

      this.setState({
        cryptoData,
        loading: false,
        error: null
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: 'Error fetching data. Please try again later.'
      });
    }
  }

  render() {
    const { cryptoData, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="crypto-container">
        {cryptoData.map((crypto, index) => (
          <CryptoCard
            key={index}
            currencyName={crypto.currencyName}
            price={crypto.price}
            symbol={crypto.symbol}
            description={crypto.description}
          />
        ))}
      </div>
    );
  }
}

export default CryptoPrices;
