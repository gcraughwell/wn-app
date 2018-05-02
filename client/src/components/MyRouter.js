import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Login from './Login';
import NotFound from './NotFound';

const PrivateRoute = ({auth, component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      auth ? <Component {...props} /> : <Redirect to="Dashboard" />
    }
  />
);

class MyRouter extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/NotFound" component={NotFound} />
          <PrivateRoute
            auth={this.props.auth}
            exact
            path="/Dashboard"
            component={Dashboard}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {auth};
};

export default connect(mapStateToProps, actions)(MyRouter);
