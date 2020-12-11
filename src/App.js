import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Procedures from './components/Procedures';
import ProcedureDetails from './components/ProcedureDetails'

import './App.css';

function App() {
  const proceduresList = [
    {
      name: 'root canal',
      description: 'very painful'
    },
    {
      name: 'crown',
      description: 'painful'
    },
    {
      name: 'cleaning',
      description: 'meh'
    }
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route 
        path="/procedures" 
        exact
        render={() => {return <Procedures proceduresList={proceduresList} />}} 
        />
        <Route
        path="/procedures/:id"
        render={(routeInfo) => {return <ProcedureDetails procedureDetails={proceduresList[parseInt(routeInfo.match.params.id)].description} />}} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
