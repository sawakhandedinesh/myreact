import React from 'react';

class Server extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      client:'',
      server:''
    }

    this.setState({
      server:this.props.clientChat
    })

    this.textServerRef = React.createRef();
  }
  SendServerData=()=>{
    this.props.updateServerData(this.textServerRef.current.value);
    this.textServerRef.current.value = '';
    
  }
  render() {
    return <div>
        <div className="bg-primary text-white"><div className="card">
            <div className="card-header text-black">Server</div>
            <div className="card-body"><input ref={this.textServerRef} type="text"/></div>
            <div className="card-footer"><button className='btn btn-primary' onClick={this.SendServerData}>Send to client</button>
            <p className='text-success mt-5'>Client: {this.props.clientChat}</p></div>
          </div></div>
    </div>;
  }
}

export default Server;