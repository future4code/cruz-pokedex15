import React from 'react'
import { CardContainer, Photo, Descprition } from './style'
import { Skills } from '../../styles/styles'
import { ContextoPokemon } from '../../context'
import { useContext } from 'react'
import { goToDetails } from '../../routes/coordinator'

function PokemonCard(props) {
    const pokemons = useContext(ContextoPokemon)

    return (
        <>
        {pokemons.length > 1 && pokemons.map((pokemon) => {
            return <CardContainer>
            <Photo>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="" title="" />
            </Photo>
            <Descprition>
                <h1>{pokemon.name}</h1>
                <Skills>
                    {pokemon.types[0] && <span className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</span>}
                    {pokemon.types[1] && <span className={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</span>}
                </Skills>
            </Descprition>
            <button onClick={() => goToDetails(props.history, pokemon.name)}>Detalhes</button>
        </CardContainer>
        })}
        </>
    )
}

export default PokemonCard
