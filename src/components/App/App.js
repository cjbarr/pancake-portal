import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/Nav';
import Header from '../Header/Header';
import Pictures from '../Pictures/Pictures';
import Recipes from '../Recipes/Recipes';
import Posts from '../Posts/Posts';
import Pals from '../Pals/Pals'

function App() {
  return (
    <div>
      <Router>
      <Header />
      <NavBar />
      <Switch>
          <Route exact path="/PancakePictures" component={Pictures} />
          <Route exact path="/PancakePals" component={Pals} />
          <Route exact path="/PancakeRecipes" component={Recipes} />
          <Route exact path="/PancakePosts" component={Posts} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
