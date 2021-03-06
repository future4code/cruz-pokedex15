import { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import Status from './Status/index'
import NavBar from '../../components/NavBar/index'

export default function Details() {

    const history = useHistory()
    const params = useParams()
    const pokemons = useContext(GlobalStateContext).pokemons
    const pokemon = pokemons.find(pokemon => (pokemon.name === params.id || pokemon.id === Number(params.id)))

    return <div>
        <NavBar history={history} />
        {pokemon && <Status pokemon={pokemon} history={history}/>}
    </div>
}