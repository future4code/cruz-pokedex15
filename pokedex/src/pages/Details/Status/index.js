import { useHistory } from "react-router"
import { goToHome, goToPokedex } from '../../../routes/coordinator'
import * as c from './style'

export default function Status(props) {

    const history = useHistory()
    console.log(props);
    return (<div>
        <h1>Details</h1>
        <button onClick={() => goToHome(history)}>Home</button>
        <button onClick={() => goToPokedex(history)}>Pokedex</button>

        {/* Conteúdo da Details */}
        <c.DetailsContainer>
            <c.BoxLeft>
                <c.Photo>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`} alt="" title="" />
                </c.Photo>
            </c.BoxLeft>
            <c.BoxRight>
                <c.PokedexData>
                    <h1>{props.pokemon.name}</h1>
                    <img src={`https://raw.githubusercontent.com/geekygreek7/animated-pokemon-gifs/master/${props.pokemon.id}.gif`} alt="" title="" />
                    <ul>
                        <li>
                            <c.SkillsDetails>
                                <span>Types:</span>
                                {props.pokemon.types.slice(0, 5).map((pokemon) => {
                                    return <span className={pokemon.type.name}>{pokemon.type.name}</span>
                                })}
                            </c.SkillsDetails>
                        </li>
                        <li>
                            <span>Moves:</span>
                            {props.pokemon.moves.slice(0, 5).map((pokemon) => {
                                return <span>{pokemon.move.name}</span>
                            })}
                        </li>
                    </ul>
                </c.PokedexData>
                <c.PokedexStatistic>
                    <h1>Estatísticas:</h1>
                    <ul>
                        {props.pokemon.stats.map((pokemon) => {
                            let color = '';
                            if(pokemon.base_stat >= 80 && pokemon.base_stat <= 100) {
                                color = '#9bcc50';
                            }else if (pokemon.base_stat > 100){
                                color = '#34B1AB';
                            }
                            else if (pokemon.base_stat >= 50 && pokemon.base_stat < 80){
                                color = '#CEEA33';
                            }else {
                                color = '#E1543C';
                            }
                            return (
                                <li>
                                    <span>{pokemon.stat.name}:</span>
                                    <div></div>
                                    <c.Est color={color} teste={pokemon.base_stat / 2}></c.Est>
                                    <span>{pokemon.base_stat}</span>
                                </li>
                            )
                        })}
                    </ul>
                </c.PokedexStatistic>
            </c.BoxRight>
        </c.DetailsContainer>
    </div>
    )
}