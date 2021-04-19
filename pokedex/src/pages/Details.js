import { useHistory } from 'react-router-dom'
import { goToHome, goToPokedex, goToDetails} from '../routes/coordinator'

export default function Details() {
    const history = useHistory()
    return (<div>
        <h1>Details</h1>
        <button onClick={() => goToHome(history)}>Home</button>
        <button onClick={() => goToPokedex(history)}>Pokedex</button>
        <button onClick={() => goToDetails(history, "nomeDoPokemon")}>Detalhes</button>
    </div>)
}