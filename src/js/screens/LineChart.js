import React, { Component, PropTypes } from 'react';
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.


export default class LineChart extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { config } = this.props;
    
    return (
      <ReactHighcharts config = {config}></ReactHighcharts>
    );
  }
};

LineChart.propTypes = {
  config: PropTypes.object.isRequired
};
