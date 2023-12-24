import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
    <div
        className='w-full h-screen flex flex-wrap justify-center items-center text-black bg-cover bg-no-repeat'
        style={{
          backgroundColor: `url('https://images.pexels.com/photos/19019470/pexels-photo-19019470/free-photo-of-arc-de-triomphe-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}>

          <div className='w-full max-w-md ms-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
              <form
                    onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                   }}>

                <div className='w-full mb-1'>
                   <InputBox 
                      label="From"
                      amount={amount} 
                      currencyOption={options}
                      onCurrencyChange={(currency) => setAmount(amount)}
                      selectCurrency={from}
                      onAmountChange={(amount) => setAmount(amount)}
                   />
                </div>
                <div className='relative w-full h-0.5'>
                  <button 
                    type='button'
                   className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-md bg-blue-600  text-black px-2 py-0.5'
                   onClick={swap}>
                    swap
                  </button>
                </div>
                <div className='width-full mt-1 mb-4'>
                  <InputBox
                      label="To"
                      amount={convertedAmount} 
                      currencyOption={options}
                      onCurrencyChange={(currency) => setTo(currency)}
                     selectCurrency={from}
                     amountDisable
                   />
                </div>
                <button type='submit' className='w-full bg-blue-600 text-black px-4 py-3 rounded-lg'>
                  Convert {from.toUpperCase()} to{to.toUpperCase()}
                </button>
              </form>
          </div>
    </div>
    </>
  );
}

export default App
