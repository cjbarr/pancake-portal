import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../Nav/Nav';
import Header from '../Header/Header';
import Pictures from '../Pictures/Pictures';
import Recipes from '../Recipes/Recipes';
import Posts from '../Posts/Posts';
import Pals from '../Pals/Pals';
import Home from '../Home/Home';
import PancakeMap from '../PancakeMap/PancakeMap';


class App extends Component{
  render(){
  return (
    <div>
      <Router>
      <Header />
      <NavBar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/PancakePictures" component={Pictures} />
          <Route exact path="/PancakePals" component={Pals} />
          <Route exact path="/PancakeRecipes" component={Recipes} />
          <Route exact path="/PancakePosts" component={Posts} />
          <Route exact path="/PancakeMap" component={PancakeMap} />
      </Switch>
      </Router>
    </div>
  );
}
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapReduxStateToProps)(App);
