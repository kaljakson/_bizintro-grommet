import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Title from 'grommet/components/Title';
import FilterIcon from 'grommet/components/icons/base/Filter';
import Add from 'grommet/components/icons/base/Add';
import CloseIcon from 'grommet/components/icons/base/Close';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Sidebar from 'react-sidebar';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Columns from 'grommet/components/Columns';
import Split from 'grommet/components/Split';
import Image from 'grommet/components/Image';
import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';
import NavControl from '../components/NavControl';
import { pageLoaded } from './utils';
import SidebarContent from './sidebar-help-content';
import SidebarOfferContent from './sidebar-offer-content';
import NavSidebar from '../components/NavSidebar';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import AlertIcon from 'grommet/components/icons/base/Alert';
import UserIcon from 'grommet/components/icons/base/User';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import DropRequestPan from './DragComponent/DropRequestPan';

import CustomDragLayer from './DragComponent/CustomDragLayer';

import * as ListsActions from '../actions/requests';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

function mapStateToProps(state) {
  console.log('+++++', state.requests.lists);
  return {
    lists: state.requests.lists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ListsActions, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
@DragDropContext(HTML5Backend)
export default class Help extends Component {

  onSetOpen(open) {
    this.setState({open: open});
  }

  menuButtonClick(ev) {
    
    this.onSetOpen(!this.state.open);
  }

  closeMenu() {
    console.log('this is for close menu');
    this.setState({open: false});
    this.setState({isShowingModal: true});
  }
  renderPropCheckbox(prop) {
    const toggleMethod = (ev) => {
      const newState = {};
      newState[prop] = ev.target.checked;
      this.setState(newState);
    };

    return (
      <p>
        <input type="checkbox" onChange={toggleMethod} checked={this.state[prop]} id={prop} />
        <label htmlFor={prop}> {prop}</label>
      </p>);
  }

  renderPropNumber(prop) {
    const setMethod = (ev) => {
      const newState = {};
      newState[prop] = parseInt(ev.target.value, 10);
      this.setState(newState);
    };
    return (
      <p >
         {prop} <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>
    );
  }

  handleClose() {
    this.setState({isShowingModal: false});
  }

  setOfferSidebar() {
    console.log('test');
    this.sidebar = <SidebarOfferContent parentToggle={this.closeMenu} />;
    this.setState({docked: false});
    this.setState({open: true});
    this.setState({isShowingModal: false});
  }

  constructor(props) {
    super(props);
    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: true,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
      isShowingModal: false,
      isScrolling: false
    };

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
    this.renderPropNumber = this.renderPropNumber.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.sidebar = <SidebarContent parentToggle={this.closeMenu} />;
    this.setOfferSidebar = this.setOfferSidebar.bind(this);

    this.moveRequest = this.moveRequest.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.stopScrolling = this.stopScrolling.bind(this);
    this.startScrolling = this.startScrolling.bind(this);
  }

  componentWillMount() {
    this.props.getLists(2);
  }

  startScrolling(direction) {
    // if (!this.state.isScrolling) {
    switch (direction) {
      case 'toLeft':
        this.setState({ isScrolling: true }, this.scrollLeft());
        break;
      case 'toRight':
        this.setState({ isScrolling: true }, this.scrollRight());
        break;
      default:
        break;
    }
    // }
  }

  scrollRight() {
    function scroll() {
      document.getElementsByTagName('main')[0].scrollLeft += 10;
    }
    this.scrollInterval = setInterval(scroll, 10);
  }

  scrollLeft() {
    function scroll() {
      document.getElementsByTagName('main')[0].scrollLeft -= 10;
    }
    this.scrollInterval = setInterval(scroll, 10);
  }

  stopScrolling() {
    this.setState({ isScrolling: false }, clearInterval(this.scrollInterval));
  }

  moveRequest(lastX, lastY, nextX, nextY) {
    this.props.moveRequest(lastX, lastY, nextX, nextY);
  }

  render() {
    
    const { lists } = this.props;
    var i = 0;
    
    // const sidebar = <SidebarContent parentToggle={this.closeMenu} />;
    const sidebarProps = {
      sidebar: this.sidebar,
      docked: this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen,
    };
    const nav = <NavSidebar />;

    return (
      <Sidebar {...sidebarProps} size='large'>
        <Header className="page-header">
          <Anchor path='/'>Bizintro</Anchor>
          <UserIcon />
        </Header>
        <Box direction='row'>
          {nav}
          <div className="help-main">
            <Box direction='row' className="help-main-header">
              <Box direction='row' justify='between' className="help-main-header-title">
                <Anchor className="main-content-title">Requests</Anchor>
              </Box>
              <Box direction='row' justify='between' className="help-main-header-title">
                <Anchor className="main-content-title">Approved</Anchor>
                <Box direction='row'>
                  <Menu responsive={true}
                    icon={<FilterIcon />}>
                    <Anchor href='#'
                      className='active'>
                      First action
                    </Anchor>
                    <Anchor href='#'>
                      Second action
                    </Anchor>
                    <Anchor href='#'>
                      Third action
                    </Anchor>
                  </Menu>
                  {!this.state.docked && <Button icon={<Add />} onClick={this.setOfferSidebar} href='#' primary={false} />}
                </Box>
              </Box>
            </Box>
            <Box direction='row'>
              <CustomDragLayer snapToGrid={false} />
              {lists.map((item, i) =>
                <DropRequestPan
                  key={item.id}
                  id={item.id}
                  item={item}
                  moveRequest={this.moveRequest}
                  startScrolling={this.startScrolling}
                  stopScrolling={this.stopScrolling}
                  isScrolling={this.state.isScrolling}
                  openSideMenu={this.menuButtonClick}
                  x={i}
                />
              )}
            </Box>

            {
              this.state.isShowingModal &&
              <ModalContainer className='modal-container' onClose={this.handleClose}>
                <ModalDialog className='modal-dialog' onClose={this.handleClose}>
                  <Box align='end' className='modal-close-button'>
                    <CloseIcon onClick={this.handleClose} />
                  </Box>
                  <Heading className='modal-heading'>
                      Thanks for the intro!
                  </Heading>
                  
                  <Paragraph className='modal-body'>You have just helped out Bethany Superdson. Thanks for contributing your help to them and Bizintro.</Paragraph>
                  <Footer className='modal-footer'>
                    <Box direction='row' className='modal-footer-someone'>
                      <UserIcon size='small' colorIndex='light-1' />&nbsp;Want to help someone else?
                    </Box>
                    <Box>
                      <Anchor href='#' className='modal-get-started'> Get started </Anchor>
                    </Box>
                  </Footer>
                </ModalDialog>
              </ModalContainer>
            }
          </div>
        </Box>
      </Sidebar>
    );
  }
}

Help.propTypes = {
  getLists: PropTypes.func,
  moveRequest: PropTypes.func,

  lists: PropTypes.array
}

// const select = state => ({
//   box: state.box,
//   nav: state.nav
// });

// export default Help;
