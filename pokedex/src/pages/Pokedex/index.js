import { useHistory } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../routes/coordinator'
import PokemonCard from '../../components/PokemonCard/index'


export default function Pokedex() {

    const history = useHistory()
    
    return (<div>
        <h1>Pokedex</h1>
        <button onClick={() => goToHome(history)}>Home</button>
        <button onClick={() => goToPokedex(history)}>Pokedex</button>
        <PokemonCard history={history} home={false} />
    </div>)
}