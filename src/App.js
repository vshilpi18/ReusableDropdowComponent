import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import { getDropdownData } from './api';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.ddlList = this.ddlList.bind(this);
    this.state = {
      options: {},
      name: ''
    }
  }
  componentDidMount() {
    this.ddlList();//Is the api to fetch employee data
  }
  render() {
    return (
      <div className="App">
        {/* This dropdown can be used anywaher in any component*/}
        <Dropdown
          id        = {'employeeList'}
          name      = {'employeeList'}
          options   = {this.state.options}
          labelName = {'Employees List'}
          onchange  = {this.getdata}
        />
        <div className="drp_dd3">
            <label>Name</label> : &nbsp;
            <input value={this.state.name} placeholder="Name" />
        </div>
      </div>
    );
  }
  getdata = (e) => {
    var sel = e.target;
    var sv = sel.options[sel.selectedIndex].text;
    this.setState({
        name: sv
    })
  }
  ddlList = () => {
    getDropdownData((res) => {
      let options = res.map((data, id) => {
        let arr = [];
        arr['id'] = data.id;
        arr['name'] = data.name;
        return arr;
      })
      this.setState({ options: options });
    });
  }

}

