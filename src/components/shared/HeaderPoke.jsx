import React from 'react'
import './styles/headerPoke.css'

const HeaderPoke = () => {
  return (
    <header className='header'>
      <div className='header__black'>
        <div className='header__circle'></div>
      </div>
      <div className='img-pokedex'>
        <a href=""><img src="/Home/pokedex.png" alt="" /></a>
      </div>
    </header>
  )
}

export default HeaderPoke