import { useHistory } from 'react-router-dom'
import PokemonCard from '../../components/PokemonCard/index'
import NavBar from '../../components/NavBar/index'
import { PokedexContainer } from './style'
import { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'

export default function Pokedex() {

    const history = useHistory()
    const [inPokedex] = useContext(GlobalStateContext).pokedex
    
    return (<div>
        <NavBar history={history} />
        <PokedexContainer className="material-icons">
            {inPokedex.length === 0 ? <div className="material-icons icon">face_retouching_off</div> : <PokemonCard history={history} home={false} /> }
        </PokedexContainer>
    </div>)
}