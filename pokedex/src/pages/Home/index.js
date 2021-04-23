import { useHistory } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../routes/coordinator'
import PokemonCard from '../../components/PokemonCard/index'
import * as c from './style'

export default function Home() {

    const history = useHistory()
    
    return (
        <>  
            <h1>Home</h1>
            <button onClick={() => goToHome(history)}>Home</button>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>
            <c.HomeContainer>
                <PokemonCard history={history} home={true} />
            </c.HomeContainer>
        </>
    )
}