import React, { Component } from "react";
import axios from "axios";
import Login from "./Login";
import Address from "./Address";
import myConntextTask from "./ContextTaskApi";

class ContextTaskHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
    };
  }

  componentDidMount = async () => {
    // const apiResponse = await axios.get("https://randomuser.me/api/?results=1");
    axios.get("https://randomuser.me/api/?results=1").then(
      (res) => {
        console.log(res);
        this.setState({
            userInfo: res.data.results,
        });
      },
      () => {
        alert("Error while getting the data");
      }
    );
    // this.setState({
    //   userInfo: apiResponse.data.results,
    // });
  };

  render() {
    return (
      <div className="container">
        <div className="border">
          <myConntextTask.Provider value={this.state.userInfo}>
            <div className="row">
              <div className="col-6 p-2">
                <Login />
              </div>
              <div className="col-6 p-2">
                <Address />
              </div>
            </div>
          </myConntextTask.Provider>
        </div>
      </div>
    );
  }
}

export default ContextTaskHome;
