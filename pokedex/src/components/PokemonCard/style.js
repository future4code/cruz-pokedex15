import styled from 'styled-components'

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    margin: 2px 2px;
    background: #fff;
    transform: scale(0.90);
    transition: all 0.2s ease;
    & > :nth-child(2){
        padding: 15px 10px;
    }
    & h1 {
        color: #444;
        font-size: 1.5rem;
    }
    &:hover > :last-child {
        visibility: visible;
        & > button:first-of-type {
            top: 0;
            opacity: 1;
        }
        & > button:last-of-type {
            top: 0;
            opacity: 1;
        }
    }
    &:hover {
        transform: scale(1.0);
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

export const Buttons = styled.div`
    & {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;
        position: absolute;
        visibility: hidden;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255, 0.80);
    }
    & > * {
        position: relative;
        background: #FFA500;
        border: 1px solid #C48000;
        padding: 10px 0;
        width: 100px;
        margin: 4px;
        border-radius: 2px;
        cursor: pointer;
        transition: all 0.2s ease;
        opacity: 0;
    }
    & > :first-child {
        top: -40px;
    }
    & > :last-child {
        top: 40px;
    }
`