import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";

function Header() {
  return (
    <>
    <div className='relative'>
      <img className='w-full object-cover' src={require("./assets/images/header/banner.png")} alt="" />
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-fade'>
        <div className="wrapper flex flex-col items-center">
        <h1 className='text-white font-bold sm:my-12 my-4 text-4xl sm:text-6xl'>Volcano Capital</h1>
        <div className='px-3 bg-yellow text-black w-32 h-12 sm:w-48 sm:h-16 flex items-center justify-center font-bold text-sm sm:text-xl rounded-3xl'>Join Volcano</div>
        </div>
      </div>
    </div>
    <TickerTape colorTheme="dark"></TickerTape>
    </>
  )
}

export default Header