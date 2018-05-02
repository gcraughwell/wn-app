import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MyRouter from './MyRouter';
// import Header from './Header';
// import Landing from './Landing';

// import Login from './Login';
// import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    // console.log(fetchUser);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <MyRouter />
            {/* <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/Login" component={Login} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
