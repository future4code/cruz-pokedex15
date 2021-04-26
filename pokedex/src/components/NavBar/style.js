import styled from 'styled-components'
import { Container } from '../../styles/styles'

export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    background: #f4f4f4;
    box-shadow: 0px 0px 2px #666;
    padding: 10px 0;
    z-index: 999;
`

export const NavContainer = styled(Container)`
    & button{
        padding: 10px;
    }
`