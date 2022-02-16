import React from 'react';
import Client from './Client';
import Server from './Server';


class Home extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       client:'',
       server:''
    }
  } 
  updateClientData=(childState)=>{
    this.setState({
      client:childState
    });
  }
  updateServerData=(serverState)=>{
    this.setState({
      server:serverState
    });
  }
  render() {
    return <div>
        <div className="border text-black mt-5">
          <div className="row">
            <div className="col-6"> <div className='m-5'><Client serverChat={this.state.server} updateClientData={this.updateClientData}/></div></div>
            <div className="col-6 "><div className='m-5'><Server clientChat={this.state.client} updateServerData={this.updateServerData}/></div></div></div>
        </div>
    </div>;
  }
}

export default Home;