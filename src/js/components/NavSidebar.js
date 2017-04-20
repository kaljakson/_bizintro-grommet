import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Logo from 'grommet/components/icons/Grommet';
import Anchor from 'grommet/components/Anchor';


import SessionMenu from './SessionMenu';
import { navActivate } from '../actions/nav';


class NavSidebar extends Component {

  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.props.dispatch(navActivate(false));
  }

  render() {
    const { nav: { items } } = this.props;
    var i = 0;
    const links = items.map(page => (
      i++,
      <Anchor path={page.path} key={i}>
        {page.label}
       </Anchor>
    ));

    return (
      <Sidebar colorIndex='neutral-3' fixed={true} size='xsmall' className='nav-sidebar'>
        <Menu fill={true} primary={true}>
          {links}
        </Menu>
        <Footer pad={{ horizontal: 'medium', vertical: 'small' }}>
          <SessionMenu dropAlign={{ bottom: 'bottom' }} />
        </Footer>
      </Sidebar>
    );
  }

}

NavSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.Object
    }))
  })
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(NavSidebar);
