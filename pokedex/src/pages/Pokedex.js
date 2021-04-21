import { useHistory } from 'react-router-dom'
import { goToHome, goToPokedex, goToDetails} from '../routes/coordinator'

export default function Pokedex() {
    const history = useHistory()
    return (<div>
        <h1>Pokedex</h1>
        <button onClick={() => goToHome(history)}>Home</button>
        <button onClick={() => goToPokedex(history)}>Pokedex</button>
    </div>)
}