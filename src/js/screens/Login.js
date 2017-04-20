import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Value from 'grommet/components/Value';
import LoginForm from 'grommet/components/LoginForm';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/Menu';
import Paragraph from 'grommet/components/Paragraph';
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


class Login extends Component {

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentDidMount() {
    pageLoaded('Login');
    this.props.dispatch(navEnable(false));
  }

  componentWillUnmount() {
    this.props.dispatch(navEnable(true));
  }

  _onSubmit(fields) {
    console.log(fields);
    const { dispatch } = this.props;
    const { router } = this.context;
    dispatch(login(fields.username, fields.password, () => (
      router.history.push('/home')
    )));
  }

  render() {
    const { session: { error } } = this.props;

    return (
      <Box>
        <Box className="login-form-box">
          <div className="login-form-section">
            <span />
            <LoginForm align='start'
              title='Bizintro'
              rememberMe={true}
              secondaryText='Sign in to lend your hand to the network.'
            onSubmit={this._onSubmit} errors={[error]} usernameType='text' />
            <div className="login-form-foot">New to Bizintro?&nbsp;&nbsp;<Anchor label='Sign Up' href='#' /></div>
          </div>
          <Footer className="login-form-box-footer"> 6 Bit Consulting in Chicago </Footer>
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
                &copy;2017 Bizintro Inc
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
        </Box>
      </Box>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  session: PropTypes.shape({
    error: PropTypes.string
  })
};

Login.contextTypes = {
  router: PropTypes.object.isRequired,
};

const select = state => ({
  session: state.session
});

export default connect(select)(Login);
