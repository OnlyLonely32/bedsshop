import React, { useEffect } from 'react';
import axios from 'axios'

import './App.css';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Card } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        setPizzas(data.pizzas);
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path='/' render={() => <Home items={pizzas} />} exact />
          <Route path='/card' component={Card} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
