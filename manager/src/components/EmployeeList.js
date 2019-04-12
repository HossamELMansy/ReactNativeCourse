import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchEmployees } from '../actions/employeeActions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees();
  }

  renderEmployees() {
    return this.props.employees.map(employee => {
      return <Text key={employee.id}>{employee.name}</Text>;
    });
  }

  render() {
    return <View>{this.renderEmployees()}</View>;
  }
}

const mapStateToProps = ({ employee }) => {
  return {
    employees: employee.employees
  };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList);
