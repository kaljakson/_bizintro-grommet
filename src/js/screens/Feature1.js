import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Value from 'grommet/components/Value';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Logo from 'grommet/components/icons/Grommet';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import { login } from '../actions/session';
import { navEnable } from '../actions/nav';
import { pageLoaded } from './utils';

import MenuIcon from 'grommet/components/icons/base/Menu';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import CubesIcon from 'grommet/components/icons/base/Cubes';
import ComplianceIcon from 'grommet/components/icons/base/Compliance';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Card from 'grommet/components/Card';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import CloseIcon from 'grommet/components/icons/base/Close';
import UserIcon from 'grommet/components/icons/base/User';


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


class Feature1 extends Component {

 
  constructor(props) {
    super(props);

    this.state = {
      isShowingModal: true,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  handleClose() {
    this.setState({isShowingModal: false});
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
        <Hero background={<Image src='/img/feature-hero.png'
          fit='cover'
          full={true} 
          align={{"left": true}}/>}
          backgroundColorIndex='dark'
          size='large'>
          <Box direction="row">
            <Anchor className='feature-header' path='/'>
            Bizintro
            </Anchor>
            <Box className="feature-heading">
              <Label className="feature-label">LABEL</Label>
              <Box className="feature-accelerate">Accelerate your transformation with the cloud</Box>
              <Box className="feature-hpe">HPE can help you benefit now from your right mix of cloud</Box>
              <Box direction="row" className="feature-more">
                <FormNextLinkIcon onClick={this.handleClick} className="feature-arrow" />
                <Box>Learn More</Box>
                {
                  this.state.isShowingModal &&
                  <ModalContainer className='modal-container' onClose={this.handleClose}>
                    <ModalDialog className='modal-dialog' onClose={this.handleClose}>
                      <Box align='end' className='modal-close-button'>
                        <CloseIcon onClick={this.handleClose} />
                      </Box>
                      <Heading className='modal-heading'>
                          Thanks Bethany
                      </Heading>
                      
                      <Paragraph className='modal-body'>We have sent your list of contact requests to the John Smith 
                      for his approval.  After he has approved your contacts they will
                      be sent a message and introduced to you.
                      </Paragraph>
                      <Footer className='modal-footer'>
                        <Box direction='row' className='modal-footer-someone'>
                          <UserIcon size='small' colorIndex='light-1' />&nbsp;Sign up today to get more out of Bizintro
                        </Box>
                        <Box>
                          <Anchor href='#' className='modal-get-started'> Create an account </Anchor>
                        </Box>
                      </Footer>
                    </ModalDialog>
                  </ModalContainer>
                }
              </Box>
            </Box>
          </Box>
        </Hero>
        <Section className="feature-section">
          <Box className="feature-section-first">
            <Box className="feature-section-first-title">Sumo accumsan mel ignota hendrerit.</Box>
            <Box className="feature-section-first-content">Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosaefacilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.</Box>
          </Box>
          <Box direction='row'
            className="feature-section-second"
            pad='none'
            size='xxlarge'>
            <Box
              pad='medium'
              className="feature-section-second-items" >
              <CubesIcon size='large' />
              <Headline size='small' className="feature-section-headline">
                Lorem ipsumdolor sit amet
              </Headline>
              <Paragraph margin='none'>Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosaefacilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.</Paragraph>
            </Box>
            <Box
              pad='medium'
              className="feature-section-second-items" >
              <ComplianceIcon size='large' />
              <Headline size='small' className="feature-section-headline">
                Lorem ipsumdolor sit amet
              </Headline>
              <Paragraph margin='none'>Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosaefacilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.</Paragraph>
            </Box>
          </Box>
          <Box direction='row'
            className="feature-section-second"
            pad='none'
            size='xxlarge'>
            <Box
              basis='1/2'
              pad='medium'
              className="feature-section-second-items" >
              <CubesIcon size='large' />
              <Headline size='small' className="feature-section-headline">
                Lorem ipsumdolor sit amet
              </Headline>
              <Paragraph margin='none'>Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosaefacilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.</Paragraph>
            </Box>
            <Box
              pad='medium'
              className="feature-section-second-items" >
              <ComplianceIcon size='large' />
              <Headline size='small' className="feature-section-headline">
                Lorem ipsumdolor sit amet
              </Headline>
              <Paragraph margin='none'>Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosaefacilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.</Paragraph>
            </Box>
          </Box>
        </Section>
        <Hero background={<Image src='/img/feature-hero2.png'
          fit='cover'
          full={true} 
          align={{"left": true}}/>}
          backgroundColorIndex='dark'
          size='large'>
          <Box direction="row">
            <Anchor className='feature-header'>
            </Anchor>
            <Box className="feature-heading">
              <Label className="feature-label">LABEL</Label>
              <Box className="feature-accelerate">Accelerate your transformation with the cloud</Box>
              <Box className="feature-hpe">HPE can help you benefit now from your right mix of cloud</Box>
              <Box direction="row" className="feature-more">
                <FormNextLinkIcon className="feature-arrow" />
                <Anchor>Learn More</Anchor>
              </Box>
            </Box>
          </Box>
        </Hero>
        <Box pad='small' responsive={true} wrap={true} className="feature-card-section">
         
          <Box direction='row' pad='small' responsive={true} wrap={true} className="feature-card-box">
            <Card thumbnail='/img/card.png'
              label='LABEL MEDIUM'
              heading='Heading 2'
              description='Paragraph Large, Vestibulum id ligula parta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.'
              link={<Anchor icon={<FormNextLinkIcon />}
                    label='Primary'
                    href='#'
                    primary={false}
                    reverse={false}
                    disabled={false} />}
              className="feature-card-item" />
           <Card thumbnail='/img/card.png'
            label='LABEL MEDIUM'
            heading='Heading 2'
            description='Paragraph Large, Vestibulum id ligula parta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.'
            link={<Anchor icon={<FormNextLinkIcon />}
                  label='Primary'
                  href='#'
                  primary={false}
                  reverse={false}
                  disabled={false} />}
            className="feature-card-item" />
           <Card thumbnail='/img/card.png'
            label='LABEL MEDIUM'
            heading='Heading 2'
            description='Paragraph Large, Vestibulum id ligula parta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.'
            link={<Anchor icon={<FormNextLinkIcon />}
                  label='Primary'
                  href='#'
                  primary={false}
                  reverse={false}
                  disabled={false} />}
            className="feature-card-item" />
          </Box>
        </Box>
        <Box direction="column"
          pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Box direction='row'
            justify='between'
            align='start'
            wrap={true}
            className='footer-menus'
            >
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              colorIndex='light-1'
              >
              <div className='title'>Corportate</div>
              <Anchor>Accessiblity</Anchor>
              <Anchor>Careers</Anchor>
              <Anchor>Contact Us</Anchor>
              <Anchor>Corporate Responsibility</Anchor>
              <Anchor>Events</Anchor>
              <Anchor>Labs</Anchor>
              <Anchor>Inverstor Relations</Anchor>
              <Anchor>Leadership</Anchor>
              <Anchor>Newsroom</Anchor>
              <Anchor>Sitemap</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              colorIndex='light-1'>
              <div className='title'>Partners</div>
              <Anchor>Find a Partners</Anchor>
              <Anchor>Partner Programms</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              colorIndex='light-1'>
              <div className='title'>Social</div>
              <Anchor>LinkedIn</Anchor>
              <Anchor>Facebook</Anchor>
              <Anchor>Twitter</Anchor>
              <Anchor>You Tube</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              >
              <div className='title'>Communities</div>
              <Anchor>Devloper Forums</Anchor>
              <Anchor>Enterprise Business</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              >
              <div className='title'>Customer Resources</div>
              <Anchor>Enterprise Store</Anchor>
              <Anchor>Public Sector Store</Anchor>
              <Anchor>Education and Training</Anchor>
              <Anchor>Email Signup</Anchor>
            </Box>
            <Box 
              justify='start'
              align='start'
              wrap={true}
              pad='small'
              >
              <div className='title'>Legal</div>
              <Anchor>Privacy</Anchor>
              <Anchor>Terms of Use</Anchor>
              <Anchor>Cookies</Anchor>
            </Box>
          </Box>
          <Footer justify='between'>
            <Box direction='row'
              align='center'
              pad={{"between": "medium"}}>
              <Paragraph margin='none' className='login-page-paragraph'>
                &copy; Copyright 2017 Hewlett Packard Enterprise Development, L.P.
              </Paragraph>
            </Box>
            <Menu direction='row'
              className="login-form-footer-menu"
              size='small'
              dropAlign={{"right": "right"}}>
              <Anchor href='#'>
                Terms of use
              </Anchor>
              <Anchor href='#'>
                Privacy
              </Anchor>
              <Anchor href='#'>
                Report a Bug
              </Anchor>
            </Menu>
          </Footer>
          <Footer>
            
          </Footer>
        </Box>
      </Box>
    );
  }
}

Feature1.propTypes = {
  dispatch: PropTypes.func.isRequired,
  box: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string
    }))
  }),
  state: PropTypes.shape({
    sidebarOpen: PropTypes.bool
  })
};

const select = state => ({
  box: state.box,
  nav: state.nav
});

export default connect(select)(Feature1);
