import React from 'react';
import Parent from './Parent';

class Home extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       company:""
    }
  } 
  updateParentData=(childState)=>{
    this.setState({
      name:childState.name
    })
}
  render() {
    return <div class='container'>
        <Parent updateParentData={this.updateParentData}/>
        <p>{this.state.name}</p>
        <p>{this.state.country}</p>
    </div>;
  }
}
export default Home;