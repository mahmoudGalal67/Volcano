import React from 'react'

function Nav() {
  return (
    <nav className='flex justify-between items-center py-3 px-5 bg-blue overflow-hidden w-screen'>
      <div className="left w-20 sm:w-32">
        <img className='w-full' src={require("./assets/images/header/logo.png")} alt="" />
      </div>
      <div className="center toggle:block hidden">
      <ul className='flex justify-center gap-3 text-white font-bold'>
        <li>Home</li>
        <li>Digital currencies</li>
        <li>shares</li>
        <li>forex</li>
        <li>goods</li>
        <li>pointers</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Gallary</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      </div>
      <div className="right hidden justify-center gap-5 text-white items-center sm:flex">
        <div className='border-2 border-white py-3 px-5 rounded-3xl font-bold'>Join volcano</div>
        <img className='w-20 h-10' src={require("./assets/images/header/Flag_of_the_United_Arab_Emirates 1.png")} alt="" />
      </div>
      <div className="togller toggle:hidden block">
        <div id="menuToggle" className='sm:top-12 top-8'>
        <input type="checkbox" />
    
        <span></span>
        <span></span>
        <span></span>
    
    <ul id="menu" className='bg-blue text-white'>
      <div className="right text-white sm:hidden block text-center my-3">
        <div className='border-2 border-white py-3 px-5 rounded-3xl font-bold my-3'>Join volcano</div>
        <img className='w-20 h-10' src={require("./assets/images/header/Flag_of_the_United_Arab_Emirates 1.png")} alt="" />
      </div>
        <li>Home</li>
        <li>Digital currencies</li>
        <li>shares</li>
        <li>forex</li>
        <li>goods</li>
        <li>pointers</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Gallary</li>
        <li>Contact</li>
        <li>About</li>
    </ul>
      </div>
      </div>
    </nav>
  )
}

export default Nav