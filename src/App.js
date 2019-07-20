import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';
import {getDropdownData} from './api';
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.ddlList = this.ddlList.bind(this);
    this.state = {
      options: {}
    }
  }
  componentDidMount(){
    this.ddlList();
  }
  render() {
    return (
      <div className="App">
        <Dropdown
          id          = {'employeeList'}
          name        = {'employeeList'}
          options     = {this.state.options}
          labelName   = {'Employees List'}
        />
      </div>
    );
  }
  ddlList = () => {
    getDropdownData( (res) => {
      let arr = [];
      let options = res.map((data,id) => {
        arr['id'] = data.id;
        arr['name'] = data.employee_name;
        return arr;
      })
      this.setState({options:options});
    });
  }
}

