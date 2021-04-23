import { useHistory } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../routes/coordinator'
import PokemonCard from '../../components/PokemonCard/index'
import * as c from './style'
import { useContext, useState } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'

export default function Home() {

    const history = useHistory()
    const [atualizar, setAtualizar] = useState(true)
    const [inPokedex, changePokedex] = useContext(GlobalStateContext).pokedex

    const selectPokemon = (id) => {
        changePokedex(id)
        setAtualizar(!atualizar)
    }
    
    return (
        <>  
            <h1>Home</h1>
            <button onClick={() => goToHome(history)}>Home</button>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>
            <c.HomeContainer>
                <PokemonCard history={history} home={true} selectPokemon={selectPokemon} pokedex={inPokedex}/>
            </c.HomeContainer>
        </>
    )
}