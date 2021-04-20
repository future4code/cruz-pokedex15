import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Status from './Status/index'

export default function Details() {

    const params = useParams()
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            setPokemon(response.data)
            console.log(response.data)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
        }
    }

    return <Status loading={loading} pokemon={pokemon}/>
}