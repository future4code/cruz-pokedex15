import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 8px 8px;
    background: #fff;
    & > :not(:first-child){
        padding: 15px 10px;
    }
    & h1 {
        color: #444;
        font-size: 1.5rem;
    }
`

export const Photo = styled.div`
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 200px;
    position: relative;
    background: #eee;
    & img {
        position: absolute;
        width: 80%;
    }
`

export const Descprition = styled.div`
     background: #fff;
`