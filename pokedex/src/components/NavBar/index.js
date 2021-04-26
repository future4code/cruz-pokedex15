import React from 'react'
import { goToHome, goToPokedex } from '../../routes/coordinator'
import { Nav, NavContainer } from './style';

function NavBar(props) {

    return (
        <Nav>
            <NavContainer>
                <div>
                    <button onClick={() => goToHome(props.history)}>Home</button>
                    <button onClick={() => goToPokedex(props.history)}>Pokedex</button>
                </div>
            </NavContainer>
        </Nav>
    )
}

export default NavBar
