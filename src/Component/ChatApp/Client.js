import React from 'react';

class Client extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      client:'',
       server:''
    }
    this.setState({
      client:this.props.serverChat
    })
    this.textRef = React.createRef();
  }

  SendData=()=>{
    // this.setState({
    //   name:this.textRef.current.value
    // })
    this.props.updateClientData(this.textRef.current.value);
    this.textRef.current.value = '';
    
  }
  
  render() {
    return <div>
        <div className="bg-primary text-white">
          <div className="card">
          <div className="card-header text-black">Client</div>
            <div className="card-body"><input ref={this.textRef} type="text"/></div>
            <div className="card-footer">
              <button className='btn btn-primary' onClick={this.SendData}>Send to server</button>
              <p className='text-success mt-5'>Server: {this.props.serverChat}</p>
            </div>
            
          </div>
        </div>
    </div>;
  }
}

export default Client;