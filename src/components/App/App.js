import './App.css';
import Toolbar from '../Toolbar/Toolbar';
import Principal from '../Principal/Principal';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Blog from '../Blog/Blog';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/'>
            <Principal />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
