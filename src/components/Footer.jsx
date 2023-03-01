import React from 'react'

function Footer() {
  return (
    <div className='footer bg-light-blue'>
      <div className="wrappper flex md:flex-row flex-col flex-wrap px-5 py-8 text-white">
        <div className="left text-center flex-1">
          <div className='my-6 text-2xl'>Connect us</div>
          <div className='my-4'>Lorem ipsum dolor sit amet.</div>
          <div className='my-4'>Lorem ipsum dolor sit amet.</div>
          <div className='my-4'>Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="center text-center flex-1">
          <div className='my-6 text-2xl'>Volcano capital</div>
          <ul>
            <li className='my-4'>Main &larr;</li>
            <li className='my-4'>About us &larr;</li>
            <li className='my-4'>Our partners &larr;</li>
            <li className='my-4'>Jobs &larr;</li>
          </ul>
        </div>
        <div className="right min-w-60 flex-1">
          <img className='m-auto' src={require("../components/assets/images/header/logo.png")} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos earum delectus error voluptates autem labore minima corrupti sit ab?</p>
        </div>
      </div>
    </div>
  )
}

export default Footer