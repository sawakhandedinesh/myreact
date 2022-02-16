import React from 'react';


class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      name:"trepup",
      country:"india"
    }
  }
  
  SendData=()=>{
    this.props.updateParentData(this.state.name);
  }
  
  render() {
    return <div className='container'>
            hello Base Class
            <button onClick={this.SendData}>Send data to base class</button>
      </div>;
  } 
}
export default Parent;