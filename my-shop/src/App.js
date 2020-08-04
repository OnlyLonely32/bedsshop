import React from 'react';
import axios from 'axios'
import { connect } from "react-redux";

import './App.css';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Card } from './pages';

import setPizzas from "./redux/actions/pizzas";


// function App() {
//   const [pizzas, setPizzas] = React.useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => {
//         setPizzas(data.pizzas);
//       });
//   }, []);

//   return (
//     <div className="App">
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path='/' render={() => <Home items={pizzas} />} exact />
//         <Route path='/card' component={Card} exact />
//       </div>
//     </div>
//   </div>
// );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        this.props.setPizzas(data.pizzas);
      });
  }

  render() {
    console.log(this.props)
    return (
      < div className="App" >
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route path='/' render={() => <Home items={this.props.items} />} exact />
            <Route path='/card' component={Card} exact />
          </div>
        </div>
      </div >)

  }
}

const mapStateToProps = state => ({ items: state.pizzas.items });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   };
// }

const mapDispatchToProps = { setPizzas };

export default connect(mapStateToProps, mapDispatchToProps)(App);
