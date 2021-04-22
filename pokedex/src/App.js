import Router from './routes/Router';
import { GlobalStyle } from './styles/styles'
import GlobalState from './global/GlobalState';

function App() {

  return (
    <div>

      <GlobalStyle />

      <GlobalState>
        <Router/>
      </GlobalState>

    </div>
  );
}

export default App;