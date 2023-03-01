import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from "../components/Footer"

import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { StockMarket } from "react-ts-tradingview-widgets";

import { TypeAnimation } from 'react-type-animation';

import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
  ]
};

function Home() {
  return (
    <div className='bg-dark-blue'>
      <Nav />
      <Header />
      <div className="opportunities  py-8 px-4">
        <div className='text-2xl font-bold text-white mb-5'>We provide a world of opportunities</div>
        <Slider className='opor-slider' {...settings}>
          <div className="slider-item">
            <img  src={require("../components/assets/images/opportunities-icons/div.png")} alt="" />
          </div>
          <div className="slider-item">
            <img  src={require("../components/assets/images/opportunities-icons/div0.png")} alt="" />
          </div>
          <div className="slider-item">
            <img  src={require("../components/assets/images/opportunities-icons/div (1).png")} alt="" />
          </div>
          <div className="slider-item">
            <img  src={require("../components/assets/images/opportunities-icons/div (2).png")} alt="" />
          </div>
          <div className="slider-item">
            <img  src={require("../components/assets/images/opportunities-icons/div (3).png")} alt="" />
          </div>
        </Slider>
        <div className="popular-crypto">
          <div className="wrapper px-12">
          <div className='text-2xl font-bold text-white my-5'>Popular cryptocurrencies</div>
          <CryptoCurrencyMarket colorTheme="dark" width="100%" height={400}></CryptoCurrencyMarket>
          <div className='text-2xl font-bold text-white my-5'>Sign up now to build your own portfolio for free!</div>
          <div className='bg-yellow text-black w-40 text-center py-3 px-5'>Get Started</div>
          </div>
        </div>
      </div>
      <div className="get-started">
        <div className='sm:text-5xl text-3xl text-white my-8 text-center'>How to
        <TypeAnimation className='text-yellow'
          sequence={['Get started', 1000, '']}
          speed={1} 
          wrapper="div"
          repeat={Infinity}
        /> with volcano</div>
        <div className="steps flex flex-wrap justify-around my-5 relative py-3 px-12">
          <div className="item mx-4 my-3 w-80 p-5 bg-light-blue relative rounded-md">
          <img className='object-cover' src={require("../components/assets/images/opportunities-icons/step1.png")} alt="" />
          <div className='my-3 text-white text-2xl'>Open an account</div>
          <p className='text-light'>Click the button below and follow our easy account setup process</p>
          <div className='absolute w-10 h-10 flex items-center justify-center top-5 right-8 rounded-full text-yellow bg-light-yellow'>1</div>
          </div>
          <div className="item mx-4 my-3 w-80 p-5 bg-light-blue relative rounded-md">
          <img className='object-cover' src={require("../components/assets/images/opportunities-icons/step1.png")} alt="" />
          <div className='my-3 text-white text-2xl'>Open an account</div>
          <p className='text-light'>Click the button below and follow our easy account setup process</p>
          <div className='absolute w-10 h-10 flex items-center justify-center top-5 right-8 rounded-full text-yellow bg-light-yellow'>1</div>
          </div>
          <div className="item mx-4 my-3 w-80 p-5 bg-light-blue relative rounded-md">
          <img className='object-cover' src={require("../components/assets/images/opportunities-icons/step1.png")} alt="" />
          <div className='my-3 text-white text-2xl'>Open an account</div>
          <p className='text-light'>Click the button below and follow our easy account setup process</p>
          <div className='absolute w-10 h-10 flex items-center justify-center top-5 right-8 rounded-full text-yellow bg-light-yellow'>1</div>
          </div>
        </div>
        <div className='text-center bg-yellow text-black w-40 px-5 py-3 rounded-3xl m-auto'>Create account</div>
      </div>
      <div className='stocks-shares p-16'>
        <StockMarket colorTheme="dark" height="600" width="100%"></StockMarket>
      </div>
      <div className="enjoy p-5 text-center text-white bg-light-blue my-8">
        <div className='text-2xl font-bold'>Open your account Enjoy trading in minutes</div>
        <p className='my-3 text-xl'>Start your journey into the world of trading with a trusted and award-winning broker</p>
        <div className='bg-yellow w-40 py-3 rounded-md text-black m-auto'>Open an account</div>
      </div>
      <Footer />
    </div>
  )
}

export default Home