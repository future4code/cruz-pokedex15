import { useHistory } from 'react-router-dom'
import { goToHome, goToPokedex, goToDetails } from '../../routes/coordinator'
import PokemonCard from '../../components/PokemonCard/index'
import * as c from './style'

export default function Home() {
    const history = useHistory()
    return (
        <>  
            <h1>Home</h1>
            <button onClick={() => goToHome(history)}>Home</button>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>
            <button onClick={() => goToDetails(history, "nomeDoPokemon")}>Detalhes</button>
            <c.HomeContainer>
                <PokemonCard />
            </c.HomeContainer>
        </>
    )
}