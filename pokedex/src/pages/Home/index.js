import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar/index'
import PokemonCard from '../../components/PokemonCard/index'
import * as c from './style'

export default function Home() {

    const history = useHistory()
    
    return (
        <>  
            <NavBar history={history}/>
            <h1>Home</h1>
            <c.HomeContainer>
                <PokemonCard history={history} home={true} />
            </c.HomeContainer>
        </>
    )
}