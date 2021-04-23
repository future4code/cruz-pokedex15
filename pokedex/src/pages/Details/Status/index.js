import { useHistory } from "react-router"
import { goToHome, goToPokedex } from '../../../routes/coordinator'
import * as c from './style'

export default function Details(props) {

    const history = useHistory()

    return (<div>
        <h1>Details</h1>
        <button onClick={() => goToHome(history)}>Home</button>
        <button onClick={() => goToPokedex(history)}>Pokedex</button>

        {/* Conteúdo da Details */}
        <c.DetailsContainer>
            <c.BoxLeft>
                <c.Photo>
                    <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="" title="" />
                </c.Photo>
            </c.BoxLeft>
            <c.BoxRight>
                <c.PokedexData>
                    <h1>Dados do Pokemon:</h1>
                    <ul>
                        <li>
                            <c.SkillsDetails>
                                <span>Types:</span>
                                <span className="fire">Grama</span>
                                <span className="grass">Poison</span>
                            </c.SkillsDetails>
                        </li>
                        <li>
                            <span>Moves:</span>
                            <span>mega-punch</span>
                            <span>pay-day</span>
                            <span>thunder-punch</span>
                            <span>slam</span>
                            <span>mega-kick</span>
                        </li>
                    </ul>
                </c.PokedexData>
                <c.PokedexStatistic>
                    <h1>Estatísticas:</h1>
                    <ul>
                        <li>
                            <span>HP:</span>
                            <span>100</span>
                        </li>
                        <li>
                            <span>Attack:</span>
                            <span>100</span>
                        </li>
                        <li>
                            <span>Defense:</span>
                            <span>100</span>
                        </li>
                        <li>
                            <span>Special-Attack:</span>
                            <span>100</span>
                        </li>
                        <li>
                            <span>Special-Defense:</span>
                            <span>100</span>
                        </li>
                        <li>
                            <span>Speed:</span>
                            <span>100</span>
                        </li>
                    </ul>
                </c.PokedexStatistic>
            </c.BoxRight>
        </c.DetailsContainer>
        <h1>{props.pokemon.name}</h1>
        <img src={`https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${props.pokemon.id}.gif`} alt="Foto do Pokemon" />
        {!props.loading && props.pokemon.stats.map((pokemon) => {
            return <h1 key={pokemon.stat.name}>{pokemon.stat.name}: {pokemon.base_stat}</h1>
        })}
        <h3>Moves: </h3>
        {!props.loading && props.pokemon.moves.slice(0, 5).map((pokemon) => {
            return <p>{pokemon.move.name}</p>
        })}

        <h3>Types:</h3>
        {!props.loading && props.pokemon.types.slice(0, 5).map((pokemon) => {
            return <p>{pokemon.type.name}</p>
        })}
    </div>)
}