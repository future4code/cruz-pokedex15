import { useHistory } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../routes/coordinator'
import React, { useContext, useState } from 'react'
import PokemonCard from '../../components/PokemonCard'
import { GlobalStateContext } from '../../global/GlobalStateContext'

export default function Pokedex() {

    const history = useHistory()
    const [atualizar, setAtualizar] = useState(true)
    const [inPokedex, changePokedex] = useContext(GlobalStateContext).pokedex

    const selectPokemon = (id) => {
        changePokedex(id)
        setAtualizar(!atualizar)
    }
    
    return (<div>
        <h1>Pokedex</h1>
        <button onClick={() => goToHome(history)}>Home</button>
        <button onClick={() => goToPokedex(history)}>Pokedex</button>
        <PokemonCard history={history} home={false} selectPokemon={selectPokemon} pokedex={inPokedex}/>
    </div>)
}