import styled from 'styled-components'   
import { Container } from '../../styles/styles'

export const PokedexContainer = styled(Container)`
    flex-flow: row wrap;
    padding: 80px 0;
    justify-content: center;
    & .icon {
        top: 200px;
        position: absolute;
        font-size: 10rem;
        color: #bbb;
    }
`