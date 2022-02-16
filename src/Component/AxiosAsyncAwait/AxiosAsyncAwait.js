import React from 'react';
import Axios from 'axios';
import NoDataFound from '../NoDataFound/NoDataFound';


class AxiosAsyncAwait extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       UserInfo:[]
    }
  }

  GetUserData = async() =>{
    this.serverResponse =  await Axios.get("https://randomuser.me/api/?results=200");
    if(this.serverResponse.status===200)  {
      this.setState({
        UserInfo:this.serverResponse.data.results     
      })
    }
  }
  
  render() {
    return <div  className='mt-5 border'>
      <div className="row ">
        <div className="col">
          <button className='btn btn-primary m-3' onClick={this.GetUserData}>
            Get User Data
          </button>
        </div>
      </div>
      <div className="row">
        {
          this.state.UserInfo.length>0?
          this.state.UserInfo.map((element)=>{
              return   <div className="col-4">
                          <div className="card mt-2">
                            <div className="card-header">
                              <img src={element.picture.large } width="100%" height="100%"/>
                            </div>
                            <div className="card-body">
                              <p>{element.name.first + ' ' +element.name.last }</p>
                              <p>{element.location.city + ', ' +element.location.country }</p>
                            </div>
                          </div>
                        </div>
          })
          
          :<NoDataFound/>
        }
      </div>
    </div>;
  }
}
export default AxiosAsyncAwait;