import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'
import './styles/home.css'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerGlobal(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')
  }

  return (
    <div className='home'>
      <img className='image' src="/Home/pokedex.png" alt="" />
      <h1>Hi Trainer!</h1>
      <p>Give me your name to start</p>
      <form onSubmit={handleSubmit}>
        <input id='name' type="text" />
        <button>Start</button>
      </form>
      <img className='ball' src="/Home/pokebo.png" alt="" />
    </div>
  )
}

export default Home 