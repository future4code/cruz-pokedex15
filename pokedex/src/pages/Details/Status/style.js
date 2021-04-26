import styled from 'styled-components'   
import { Container } from '../../../styles/styles'
import { Skills } from '../../../styles/styles'

export const DetailsContainer = styled(Container)`
    display: flex;
    flex-flow: row nowrap;
    padding: 60px 0;
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
    flex-flow: column nowrap;
    margin-left: 20px;
    & ul > * {
        padding: 6px 0;
    }
    & h1 {
        color: #999;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    & > * ul li {
        padding: 8px 0;
        border-bottom: 1px solid #ccc;
    }

    & > :first-child li:first-of-type {
        padding-bottom: 14px;
    }

`
export const PokedexData = styled.div`
    position: relative;
    & img:first-of-type {
        padding-left: 16px;
        background: #fff;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    & li:nth-child(2) {
        padding: 14px 0;
    }

    & li:nth-child(2) > span:nth-child(n+2) {
        margin-left: 6px;
        color: #777;
        background: #F3F3F3;
        border-radius: 3px;
        padding: 4px 6px;
        border: 1px solid #ddd;
    }
`

export const PokedexStatistic = styled.div`
    & ul li div {
        flex-grow: 1;
    }
    & ul li span:nth-child(3){
        ${'' /* background: #9bcc50; */}
        margin-right: 6px;
        border-radius: 4px;
    }
    & > ul li {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    margin-top: 20px;
`

export const SkillsDetails = styled(Skills)`
    margin-top: 0;
    & > :first-child {
        font-size: 1em;
        color: #222;
        padding: 0;
    }
`
export const Est = styled.span`
    width: ${({teste}) => (teste)}%;
    background: ${({color}) => (color)};
`