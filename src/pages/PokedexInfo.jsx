import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokeInfo.css'

const PokedexInfo = () => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [id])

  console.log(pokemon)

  return (
    <div id='root'>
      <div className='pokeid__container'>
        <img className='pokeid__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </div>
      <div className='name-container'>
        <h1 className={`name-poke bg-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h1>
        <h2 className='number-poke'>N°{pokemon?.order}</h2>
      </div>
      <ul className="poke__stats">
        <li className="poke__weight">
          <span className='span'>Weigth</span>
          <br />
          <span className="poke__span">{pokemon?.weight}</span>
        </li>
        <li>
          <span className='span'>Height</span>
          <br />
          <br />
          <span className="poke__span">{pokemon?.height}</span>
        </li>
      </ul>
      <div className='poke__type-container'>
        <div className="poke__type">
          <h3 className="poke__text">Type</h3>
          <div class="poke__type-type">
            {
              pokemon?.types.map(type => (
                <li className='poke__type-li' key={type.type.name}>{type.type.name}</li>
              ))
            }
          </div>
        </div>
      </div>
      <div className='poke__poke-container'>
        <div className="poke__abilities">
          <h3 className="poke__text">Abilities</h3>
          <div className="poke__abilitie">{pokemon?.abilities[0].ability.name
          }</div>
        </div>
      </div>
      <div class="poke__poke-container">
        <div class="poke__abilities container-poke">
          <h3 className='poke__text'>Movements</h3>
          <span className='' >
            {
              pokemon?.moves.map(move => (
                <li className='poke-card__type' key={move.move.name}>{move.move.name}</li>
              ))
            }
          </span>
        </div>
      </div>
      <div className='poke-conteiner'>
        <div class="poke__poke-conta">
          <div class="poke__stat">
            <h3 className='poke__text'>Stats</h3>
            <li className='list__stat' ><b>HP:</b> {pokemon?.stats[0].base_stat}</li>
            <li className='list__stat' ><b>ATTACK:</b> {pokemon?.stats[1].base_stat}</li>
            <li className='list__stat' ><b>DEFENSE:</b> {pokemon?.stats[2].base_stat}</li>
            <li className='list__stat' ><b>SPECIAL-ATTACK:</b> {pokemon?.stats[3].base_stat}</li>
            <li className='list__stat' ><b>SPECIAL-DEFENSE:</b> {pokemon?.stats[4].base_stat}</li>
            <li className='list__stat' ><b>SPEED:</b> {pokemon?.stats[5].base_stat}</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokedexInfo