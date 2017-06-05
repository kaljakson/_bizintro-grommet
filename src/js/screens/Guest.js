import React, { Component, PropTypes } from 'react';
import Responsive from 'grommet/utils/Responsive';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Split from 'grommet/components/Split';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';
import {
  loadDashboard, unloadDashboard
} from '../actions/dashboard';

import { pageLoaded } from './utils';
import NavSidebar from '../components/NavSidebar';



import UserIcon from 'grommet/components/icons/base/User';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import SearchIcon from 'grommet/components/icons/base/Search';
import ReactModal from 'react-modal';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import Button from 'grommet/components/Button';


import Sidebar from 'react-sidebar';
import SidebarContent from './contacts-sidebar';

class Guest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModal: false,
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this._onResponsive = this._onResponsive.bind(this);
  }
  
  handleClose(ev) {
    ev.preventDefault();
    console.log('---------');
    this.setState({isShowingModal: false});
  }
  handleClick(ev) {
    ev.preventDefault();
    console.log('---------', this.state);
    this.setState({isShowingModal: true});
  }

  componentDidMount() {
    // console.log(this);
    pageLoaded('Guest');
    // this.props.dispatch(loadDashboard());
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    // console.log(this);
    // this.props.dispatch(unloadDashboard());
    this._responsive.stop();
  }

  _onResponsive (isLayoutSmall) {
    
  }

  render() {

    
    return (
      <Box>
        <Box className="guest-content">
          <Box className='guest-section'>
            <Box className="guest-content-title">
              Bizintro
            </Box>
            <Box className="guest-content-sub-title">
              Hi Bethany
            </Box>
            <Box className="guest-content-description">
              Would it be helpful to you if John Smith was able to make some meaningful introductions? Seach their list of contacts to get started.
            </Box>
            <Box>
              <Button className='guest-start-button' href='/guest-search' label="Start Search" />
            </Box>
          </Box>
        </Box>
        <Box direction='row' className="guest-footer">
          <Box className='guest-footer-left-col'>
            <UserIcon href='/feature' onClick={this.handleClick} colorIndex="light-1" /> Sing up today to g et more out of Bizintro
            {
              this.state.isShowingModal &&
              <ModalContainer onClose={this.handleClose}>
                <ModalDialog onClose={this.handleClose}>
                  <h1>Dialog Content</h1>
                  <p>More Content. Anything goes here</p>
                </ModalDialog>
              </ModalContainer>
            }
          </Box>
          <Box className='guest-footer-right-col'>
            <Anchor href='#'>Create Account</Anchor>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Guest;
