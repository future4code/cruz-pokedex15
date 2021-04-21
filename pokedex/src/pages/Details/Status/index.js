import { useHistory } from "react-router"
import { goToHome, goToPokedex} from '../../../routes/coordinator'

export default function Status(props) {

    const history = useHistory()

    return (<div>
        <h1>Details</h1>
        <button onClick={() => goToHome(history)}>Home</button>
        <button onClick={() => goToPokedex(history)}>Pokedex</button>
        
        <h1>{props.pokemon.name}</h1>
        <img src={props.pokemon.image} alt="Foto do Pokemon"/>
        {props.pokemon.stats.map((pokemon) => {
            return <h1 key={pokemon.stat.name}>{pokemon.stat.name}: {pokemon.base_stat}</h1>
        })}
        <h3>Moves: </h3>
        {props.pokemon.moves.slice(0, 5).map((pokemon) => {
            return <p>{pokemon.move.name}</p>
        })}

        <h3>Types:</h3>
        {props.pokemon.types.slice(0, 5).map((pokemon) => {
            return <p>{pokemon.type.name}</p>
        })}
    </div>)
}