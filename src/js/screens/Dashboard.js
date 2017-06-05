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
import Title from 'grommet/components/Title';

import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';

import SegmentedControl from 'react-segmented-control';
import NavControl from '../components/NavControl';
import {
  loadDashboard, unloadDashboard
} from '../actions/dashboard';

import { pageLoaded } from './utils';
import NavSidebar from '../components/NavSidebar';

import Chart, 
  { Base, Layers, Marker, MarkerLabel, Line, HotSpots, Axis } 
  from 'grommet/components/chart/Chart';

import LineChart from './LineChart';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import DateSlide from './DateSlide';

class Dashboard extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.layout !== nextProps.layout) return true;
    else return false;
  }
  
  componentDidMount() {
    console.log(this);
    pageLoaded('Dashboard');
    this.props.dispatch(loadDashboard());
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    console.log(this);
    this.props.dispatch(unloadDashboard());
    this._responsive.stop();
  }

  constructor(props) {
    super(props);
    console.log('props');
    console.log(props);
    this.state = {
      date: '',
      chart_type: ''
    }
    this._onResponsive = this._onResponsive.bind(this);
    this.dateUpdated = this.dateUpdated.bind(this);
    this.chartTypeUpdate = this.chartTypeUpdate.bind(this);
  }

  dateUpdated(value) {
    console.log('----segment control clicked', value);
  }
  chartTypeUpdate(value) {
    console.log('----chart type updated----', value);
  }

  _onResponsive (isLayoutSmall) {
    console.log(isLayoutSmall);
    this.setState({
      layout: (isLayoutSmall) ? 'small' : 'large'
    });
  }

  render() {
    const nav = <NavSidebar />;
    const config = {
      title: null, 
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
      }]
    }
    
    return (
      <Box>
        <Header className="introduction-header">
          <Anchor path='/'>Bizintro</Anchor>
        </Header>
        <Box direction='row'>
          {nav}
          <div className='main-content'>
            <Box className='dashboard-chart-part'>
              <Box direction='row' className='dashboard-chart-header'>
                <Box direction='row' className='left-col'>
                  <SegmentedControl 
                    onChange={this.chartTypeUpdate} 
                    value={this.state.chart_type}
                    name="chart_type">
                    <span value="instruction">
                      Instructions<br />
                      <strong>150</strong>
                    </span>
                    <span value="appointment">
                      Appointments<br />
                      <strong>150</strong>
                    </span>
                    <span value="help">
                      Helps<br />
                      <strong>150</strong>
                    </span>
                    <span value="contact">
                      Contacts<br />
                      <strong>150</strong>
                    </span>
                  </SegmentedControl>
                </Box>
                <Box className='right-col'>
                  <SegmentedControl 
                    onChange={this.dateUpdated} 
                    value={this.state.date}
                    name="date">
                    <span value="day">Day</span>
                    <span value="week">Week</span>
                    <span value="month">Month</span>
                    <span value="year">Year</span>
                  </SegmentedControl>
                </Box>
              </Box>
              <LineChart config={config} />
            </Box>
            <Box className='dashboard-section' direction={this.state.layout == 'small' ? 'column' : 'row'}>
              <Box className='dashboard-section-left-col'>
                <Header>
                  <Title>Rising Contacts</Title><Anchor href='#'>View all contacts</Anchor>
                </Header>
                <Box direction='row'>
                  <Box className='dashboard-contact-item'>
                    <Box direction='row' className='dashboard-contact-item-header'>
                      <Title className='dashboard-contact-item-title'>
                        Trey Anastasio<br />
                        <span className='sub-title'>CEO Phishn Inc.</span>
                      </Title>
                      <span className='contact-budget'>1</span>
                    </Box>
                    <Box className='dashboard-contact-item-profile'>
                      <Value value='Profile Completion'
                        units=' '
                        align='start' className='dashboard-contact-item-profile-text' />
                      <Meter value={40} className='dashboard-contact-item-profile-graph'/>
                    </Box>
                    <Box className='dashboard-contact-item-third-row'>
                      <Box className='dashboard-contact-item-text'>
                        Instructions
                      </Box>
                      <Box direction='row' className='dashboard-contact-item-approves'>
                        <Box className='col'>
                          <strong>Requests</strong>
                          <Box>85</Box>
                        </Box>
                        <Box className='col'>
                          <strong>Accepts</strong>
                          <Box>32</Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className='dashboard-contact-item-forth-row'>
                      <Box className='text-help'>Helps History</Box>
                      <Box>
                        <Chart>
                          <Base />
                          <Layers>
                            <Line values={[70, 0, 20, 100, 60]} />
                          </Layers>
                        </Chart>
                      </Box>
                    </Box>
                  </Box>
                  <Box className='dashboard-contact-item'>
                    <Box direction='row' className='dashboard-contact-item-header'>
                      <Title className='dashboard-contact-item-title'>
                        Trey Anastasio<br />
                        <span className='sub-title'>CEO Phishn Inc.</span>
                      </Title>
                      <span className='contact-budget'>1</span>
                    </Box>
                    <Box className='dashboard-contact-item-profile'>
                      <Value value='Profile Completion'
                        units=' '
                        align='start' className='dashboard-contact-item-profile-text' />
                      <Meter value={40} className='dashboard-contact-item-profile-graph'/>
                    </Box>
                    <Box className='dashboard-contact-item-third-row'>
                      <Box className='dashboard-contact-item-text'>
                        Instructions
                      </Box>
                      <Box direction='row' className='dashboard-contact-item-approves'>
                        <Box className='col'>
                          <strong>Requests</strong>
                          <Box>85</Box>
                        </Box>
                        <Box className='col'>
                          <strong>Accepts</strong>
                          <Box>32</Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className='dashboard-contact-item-forth-row'>
                      <Box className='text-help'>Helps History</Box>
                      <Box>
                        <Chart>
                          <Base />
                          <Layers>
                            <Line values={[70, 0, 20, 100, 60]} />
                          </Layers>
                        </Chart>
                      </Box>
                    </Box>
                  </Box>
                  <Box className='dashboard-contact-item'>
                    <Box direction='row' className='dashboard-contact-item-header'>
                      <Title className='dashboard-contact-item-title'>
                        Trey Anastasio<br />
                        <span className='sub-title'>CEO Phishn Inc.</span>
                      </Title>
                      <span className='contact-budget'>1</span>
                    </Box>
                    <Box className='dashboard-contact-item-profile'>
                      <Value value='Profile Completion'
                        units=' '
                        align='start' className='dashboard-contact-item-profile-text' />
                      <Meter value={40} className='dashboard-contact-item-profile-graph'/>
                    </Box>
                    <Box className='dashboard-contact-item-third-row'>
                      <Box className='dashboard-contact-item-text'>
                        Instructions
                      </Box>
                      <Box direction='row' className='dashboard-contact-item-approves'>
                        <Box className='col'>
                          <strong>Requests</strong>
                          <Box>85</Box>
                        </Box>
                        <Box className='col'>
                          <strong>Accepts</strong>
                          <Box>32</Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className='dashboard-contact-item-forth-row'>
                      <Box className='text-help'>Helps History</Box>
                      <Box>
                        <Chart>
                          <Base />
                          <Layers>
                            <Line values={[70, 0, 20, 100, 60]} />
                          </Layers>
                        </Chart>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className='dashboard-section-right-col'>
                <Header>
                  <Title>Recent Introductions</Title>
                </Header>
                <Box>
                  <Table className='dashboard-recent-instructions'>
                    <thead>
                      <tr>
                        <th>
                          Contact Name
                        </th>
                        <th>
                          Sent
                        </th>
                        <th>
                          Accepted
                        </th>
                        <th>
                          Scheduled
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRow>
                        <td>
                          Jennifer McCarthy
                        </td>
                        <td colSpan={3}>
                          <DateSlide />
                        </td>
                      </TableRow>
                      <TableRow>
                        <td>
                          Jennifer McCarthy
                        </td>
                        <td colSpan={3}>
                          <DateSlide />
                        </td>
                      </TableRow>
                      <TableRow>
                        <td>
                          Jennifer McCarthy
                        </td>
                        <td colSpan={3}>
                          <DateSlide />
                        </td>
                      </TableRow>
                      <TableRow>
                        <td>
                          Jennifer McCarthy
                        </td>
                        <td colSpan={3}>
                          <DateSlide />
                        </td>
                      </TableRow>
                      <TableRow>
                        <td>
                          Jennifer McCarthy
                        </td>
                        <td colSpan={3}>
                          <DateSlide />
                        </td>
                      </TableRow>
                    </tbody>
                  </Table>
                </Box>
              </Box>
            </Box>
            
          </div>
        </Box>
      </Box>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Dashboard.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.dashboard });

export default connect(select)(Dashboard);
