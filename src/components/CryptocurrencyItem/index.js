// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogoUrl} = cryptoDetails

  return (
    <li className="list-item">
      <div className="container-item">
        <img src={currencyLogoUrl} alt={currencyName} 
        className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
