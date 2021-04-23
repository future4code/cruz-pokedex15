import styled from 'styled-components'   
import { Container } from '../../../styles/styles'

export const DetailsContainer = styled(Container)`
    display: flex;
    flex-flow: row nowrap;
    & > :last-child {
        align-self: normal;
    }
    & > :first-child {
        width: 36%;
    } 
`

export const Photo = styled.div`
    background: #E9E9E9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 400px;
    border-radius: 8px;
    & img {
        position: absolute;
        width: 80%;
    } 
`

export const BoxLeft = styled.div`

`
export const BoxRight = styled.div`
    flex-grow: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

`
export const PokedexData = styled.div`
`

export const PokedexStatistic = styled.div`
    margin-left: 20px;
`