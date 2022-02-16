import React from 'react';
import Axios from 'axios';
import UserInfo from  '../../UserInfo';
import NoDataFound from '../NoDataFound/NoDataFound';



class AxiosUser extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userInfo:[]
    }

  }
  GetUsersData=()=>{
    // Axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    //   this.setState({ userInfo: response.data });
    // }).catch(error => {
    //   console.log(error);
    // });
    this.setState({ userInfo: UserInfo });
}

SetFilter=(event)=>{
  //this.setState({ userInfo: UserInfo });
  this.setState({
     userInfo: (event.currentTarget.value ==='Male' || event.currentTarget.value ==='Female') ? UserInfo.filter(function (el) {
              let gen = el.Gender===1?'Male':'Female'
            return   gen === event.currentTarget.value;
          }) : UserInfo
      });
}

  
  render() {
    return <div className='mt-5 border'>
            <div className="row">
                <div className="col"><div className='m-3'><button className='btn btn-primary' onClick={this.GetUsersData}>Get Users</button> </div></div>
            </div>
            {this.state.userInfo.length > 0 ?
            <div>
            <div className="row filter-row mt-3">
                <div className="col">
                    <input type="radio" id="All" name="fav_language" value="All" onChange={this.SetFilter}/>
                    <label for="All">All</label>&nbsp;<input type="radio" id="Male" name="fav_language" value="Male" onChange={this.SetFilter}/>
                    <label for="Male">Male</label>&nbsp;<input type="radio" id="Female" name="fav_language" value="Female" onChange={this.SetFilter}/>
                     <label for="Female">Female</label>&nbsp;
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
              <table className='table table-striped table-hover'>
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Gender</th>
                    <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.userInfo.map((element, index)=> {
                        return(
                             <tr>
                               <td>{element.UserID}</td>
                               <td>{element.FirstName}</td>
                               <td>{element.LastName}</td>
                               <td>{element.Gender==1?'Male':'Female'}</td>
                               <td>{element.Email}</td>
                             </tr> 
                        )
                      })
                      }
                  </tbody>
                </table>
              </div>
            </div></div>
                      :<NoDataFound/>

            }
      </div>;
  }
}

export default AxiosUser;