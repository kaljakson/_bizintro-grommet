import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Logo from 'grommet/components/icons/Grommet';
import Anchor from 'grommet/components/Anchor';
import SearchInput from 'grommet/components/SearchInput';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import Paragraph from 'grommet/components/Paragraph';
import CheckBox from 'grommet/components/CheckBox';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};


const GuestCreacteSidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
  return (
    <Sidebar fixed={true} size='large' className="guest-slide-bar-content">
      <Box className="guest-second-step">
        <Box className="guest-second-sidebar-button">
          <Button href='#' icon={<CloseIcon />} plain={true}
            a11yTitle='Close Menu' />
        </Box>
        <Heading tag='h2'>John's intro Pitch(3/10)</Heading>
        <Paragraph size='large'>Add a note below explaining why you want to to be introduced or why you need my contacts help.</Paragraph>
        <FormField>
         <textarea rows="10" cols="50" className="guest-second-step-textarea">
          Hi Beth, 
          I hope you are doing well. This persons is perfect for my next project. 
          Can we two connect? 
          Justin
         </textarea>
        </FormField>
        <Box direction='row'>
          <CheckBox />
          <Box className="checkbox-title">Above message applies to all contacts i’ve chosen</Box>
        </Box>
        <Box>
          <Button href='/guest-feature' className='guest-sidebar-next-button'>Next</Button>
        </Box>
      </Box>
    </Sidebar>
  );
};

GuestCreacteSidebarContent.propTypes = {
  style: PropTypes.object,
};

export default GuestCreacteSidebarContent;
