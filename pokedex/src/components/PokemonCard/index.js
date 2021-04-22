import React, { useEffect } from 'react'
import { CardContainer, Photo, Descprition } from './style'
import { Skills } from '../../styles/styles'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { useContext } from 'react'
import { goToDetails } from '../../routes/coordinator'

function PokemonCard(props) {
    const pokemons = useContext(GlobalStateContext).pokemons
    const [inPokedex, changePokedex] = useContext(GlobalStateContext).pokedex

    useEffect(() => {
        renderPokemons()
        console.log(2)
    }, [inPokedex])

    const renderPokemons = () => {

        const pokemonsFiltrados = pokemons.filter((pokemon) => {
            if (props.home && !inPokedex.includes(pokemon.id)) {
                return true
            }
            else if (!props.home && inPokedex.includes(pokemon.id)) {
                return true
            }
            else {
                return false
            }
        })

        return pokemonsFiltrados.length > 0 && pokemonsFiltrados.map((pokemon) => {
            return <CardContainer key={pokemon.name}>
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
            <button onClick={() => changePokedex(pokemon.id)}>{props.home? "Adicionar" : "Remover"}</button>
        </CardContainer>
        })
    }

    return (
        <>
        {renderPokemons()}
        </>
    )
}

export default PokemonCard
