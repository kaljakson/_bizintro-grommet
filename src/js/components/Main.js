import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Anchor from 'grommet/components/Anchor';

import NavSidebar from './NavSidebar';
import { navResponsive } from '../actions/nav';

import Landing from '../screens/Landing';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Tasks from '../screens/Tasks';
import Task from '../screens/Task';
import NotFound from '../screens/NotFound';
import Home from '../screens/Home';
import Help from '../screens/Help';
import Pricing from '../screens/Pricing';
import Appointment from '../screens/Appointment';
import Feature from '../screens/Feature';
import Feature1 from '../screens/Feature1';
import Contacts from '../screens/Contacts';
import ContactsList from '../screens/ContactsList'

import Guest from '../screens/Guest';
import GuestSearch from '../screens/GuestSearch';

class Main extends Component {

  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
  }

  _onResponsive(responsive) {
    this.props.dispatch(navResponsive(responsive));
    this.setState({
      layout: (responsive) ? 'small' : 'large'
    });
  }

  render() {
    const {
      nav: { active: navActive, enabled: navEnabled, responsive }
    } = this.props;
    const includeNav = (navActive && navEnabled);
    let nav;
    if (includeNav) {
      nav = <NavSidebar />;
    }
    const priority = (includeNav && responsive === 'single' ? 'left' : 'right');

    return (
      <App centered={false}>
        <Router>
          <Switch>
            <Route exact={true} path='/' component={Landing} />
            <Route path='/feature' component={Feature} />
            <Route path='/guest-feature' component={Feature1} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/appointment' component={Appointment} />
            <Route path='/help' component={Help} />
            <Route path='/contacts/lists' component={ContactsList} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/guest' component={Guest} />
            <Route path='/guest-search' component={GuestSearch} />
            <Route path='/*' component={NotFound} />
            
          </Switch>
        </Router>
      </App>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    active: PropTypes.bool,
    enabled: PropTypes.bool,
    responsive: PropTypes.string
  })
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(Main);
