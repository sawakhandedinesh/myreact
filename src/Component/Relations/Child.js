import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props)

    
  }


 
  
  render() {
    return <div className='container'>
        hello derived class
        <p>{this.props.myObj.name}</p>
            <p>{this.props.myObj.company}</p>
            <button onClick={this.SendData}>Send data to base class</button>
    </div>;
  }
}

export default Child;