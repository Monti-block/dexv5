import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SwapWidget, Theme } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

const theme: Theme = {
  primary: '#FFF',
  secondary: '#A9A9A9',
  interactive: '#f7f7f7',
  container: '#4E4E5A',
  module: '#222633',
  accent: '#0059fd',
  outline: '#0059fd',
  dialog: '#000',
  fontFamily: '"Helvetica"',
  borderRadius: 0.5,
}


function App() {
  return (
  <div className="Uniswap">
    <SwapWidget 
    theme={theme}
    convenienceFee={15}
    convenienceFeeRecipient='0xC022B4D80db9AD7c8c1A310a573421240A2aBCE1'/>
  </div>
  )
}

export default App;

