import { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ContextoPokemon } from '../../context'
import { goToHome, goToPokedex } from '../../routes/coordinator'
import Status from './Status/index'

export default function Details() {

    const history = useHistory()
    const params = useParams()
    const pokemons = useContext(ContextoPokemon)
    const pokemon = pokemons.find(pokemon => (pokemon.name === params.id || pokemon.id === Number(params.id)))

    return <div>
        {pokemon && <Status pokemon={pokemon} history={history}/>}
    </div>
}