import React from 'react';
const hocComp = (Component)=>{
class NewComponent extends React.Component {
  constructor() {
    super()
  
    this.state = {
       count:0
    }
  }

  updateCount=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  
  render() {
    return (<Component count={this.state.count} updateCount={this.updateCount} />);
  }
}
return NewComponent;
}
export default hocComp;