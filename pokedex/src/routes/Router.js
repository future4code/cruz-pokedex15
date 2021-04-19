import { Switch, Route, BrowserRouter} from 'react-router-dom'
import Details from '../pages/Details'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'

export default function Router() {
    return (<BrowserRouter>

            <Switch>
                
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/pokedex">
                    <Pokedex />
                </Route>

                <Route exact path="/pokemon/:id">
                    <Details />
                </Route>

                <Route>
                    <h1>Error 404 - Página não Encontrada</h1>
                </Route>
                
            </Switch>

        </BrowserRouter>
    )
}