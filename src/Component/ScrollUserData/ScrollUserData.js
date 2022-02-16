import React from "react";
import Axios from "axios";
import NoDataFound from "../NoDataFound/NoDataFound";

class ScrollUserData extends React.Component {
  constructor(props) {
    super(props);
    this.count = 10;
    this.state = {
      UserInfo: [],
    };

    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.count = this.count + 10;
        this.GetUserData();
      }
    };
  }
  GetUserData = async () => {
    if (this.count <= 500) {
      this.serverResponse = await Axios.get(
        "https://randomuser.me/api/?results=" + this.count
      );
      debugger;
      if (this.serverResponse.status === 200) {
        this.setState({
          UserInfo: this.serverResponse.data.results,
        });
      }
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="mt-5 border">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary m-3" onClick={this.GetUserData}>
              Get User Data
            </button>
          </div>
        </div>
        <div className="row">
          {this.state.UserInfo.length > 0 ? (
            this.state.UserInfo.map((element, index) => {
              return (
                <div id={index + 1} className="col-4">
                  <div className="card mt-2">
                    <div className="card-header">
                      <img
                        src={element.picture.large}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="card-body">
                      <p>{element.name.first + " " + element.name.last}</p>
                      <p>
                        {element.location.city +
                          ", " +
                          element.location.country}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    );
  }
}
export default ScrollUserData;
