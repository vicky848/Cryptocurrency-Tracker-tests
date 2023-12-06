import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

const APIurl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrenciesList()
  }

  getCryptocurrenciesList = async () => {
    try {
      const response = await fetch(APIurl)
      const data = await response.json()
      this.setState({
        cryptoCurrencyList: data.map(eachItem => ({
          currencyName: eachItem.currency_name,
          usdValue: eachItem.usd_value,
          euroValue: eachItem.euro_value,
          id: eachItem.id,
          currencyLogoUrl: eachItem.currency_logo,
        })),
        isLoading: false,
      })
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error)
      this.setState({
        isLoading: false,
      })
    }
  }

  renderCryptocurrencyList = () => {
    const {cryptoCurrencyList} = this.state
    return <CryptocurrenciesList cryptoCurrencyList={cryptoCurrencyList} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrencyList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
