// Write your JS code here
import './index.css'

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  renderCryptocurrency = () => (
    <div className="list-heading">
      <p className="coin-heading">Coin</p>
      <div className="usd-euro-container">
        <p className="value">USD</p>
        <p className="value">EURO</p>
      </div>
    </div>
  )

  renderView = () => {
    const {cryptoCurrencyList} = this.props

    return (
      <div className="list-container">
        {this.renderCryptocurrency()}
        <ul className="crypto-list">
          {cryptoCurrencyList.map(eachCrypto => (
            <CryptocurrencyItem
              key={eachCrypto.id}
              cryptoDetails={eachCrypto}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
