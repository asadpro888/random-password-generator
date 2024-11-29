import React, { useState } from 'react'
import useCurrencyInf from '../hooks/useCurrencyInfo'
import InputBox from './InputBox'
const StockShare = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
        <h1 className='bg-red-200'>Test tail</h1>
        <InputBox/>
    </div>
  )
}

export default StockShare