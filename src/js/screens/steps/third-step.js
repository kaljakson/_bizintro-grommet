'use strict'
import React, { Component, PropTypes } from 'react'
import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import SearchInput from 'grommet/components/SearchInput';
import Button from 'grommet/components/Button';
import Section from 'grommet/components/Section';

const store = { primary_contact: ''}
const ThirdStep = React.createClass ({
    getInitialState() {
        return store
    },
    
    handlePrimaryContactChanged(event) {
      store.primary_contact = event.target.value
      this.setState(store)  
    },
    
    render() {
      return (
          <Section className='slide-bar-section'>
            Choose the primary contact. This is the person who gets to drive the metting that results from the introduction.
            <Box className='slide-bar-search'>
              <div>
                Primary Contact
              </div>
              <SearchInput placeHolder='Search'
                suggestions={['first', 'second', 'third', 'fourth']}
                className="slide-bar-search-bar"
                onChange={this.handlePrimaryContactChanged} 
                value={this.state.primary_contact}
                />
            </Box>
          </Section>
      )
    }
})

export { ThirdStep }