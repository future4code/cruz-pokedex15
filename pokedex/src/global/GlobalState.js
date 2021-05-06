import { GlobalStateContext } from "./GlobalStateContext";
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function GlobalState(props) {

    const [pokemons, setPokemons] = useState([])
    const [inPokedex, setPokedex] = useState([])

    const changePokedex = (id) => {
      const newPokedex = inPokedex

      if (!inPokedex.includes(id)) {
        newPokedex.push(id)
      }
      else {
        const index = newPokedex.indexOf(id)
        newPokedex.splice(index, 1)
      }

      setPokedex(newPokedex)
    }

    const pokedex = [inPokedex, changePokedex]

    useEffect(() => {
      getPokemons()
    }, [])
  
    const getPokemons = async () => {
      try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=15`)
          getPokemonsDetails(response.data.results)
      }
      catch (error) {
          console.log(error)
      }
    }
  
    const getPokemonsDetails = async (xd) => {
      const listaPokemon = []
      for (let pokemon of xd) {
        try {
          const response = await axios.get(pokemon.url)
          const pokemonDetails = {...response.data, image: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`}
          listaPokemon.push(pokemonDetails)
        }
        catch (error) {
          console.log(error)
        }
      }
      setPokemons(listaPokemon)
    }
    return <GlobalStateContext.Provider value={{pokemons, pokedex}}>
        {props.children}
    </GlobalStateContext.Provider>
}