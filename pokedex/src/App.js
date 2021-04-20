import Router from './routes/Router';
import { GlobalStyle } from './styles/styles'
import { ContextoPokemon } from './context'
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
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
        listaPokemon.push(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    setPokemons(listaPokemon)
  }

  return (
    <div>
      <GlobalStyle />
      <ContextoPokemon.Provider value={pokemons}>
        <Router/>
      </ContextoPokemon.Provider>
    </div>
  );
}

export default App;