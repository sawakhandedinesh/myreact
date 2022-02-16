import React, { Component } from 'react';
import Table from './Table';
import myConntextTask from './ContextTaskApi';



class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         header:["first name","last name"]
      }
    }
    
  render() {
    return <div className='container'>
        <myConntextTask.Consumer>
        {(contextData)=>{
                return contextData.length > 0 ? ( <p><Table 
                header={this.state.header} 
                data={[
                    contextData[0].name.first,
                    contextData[0].name.last
                  ]}
                /></p>) : (
                    <div></div>
                  );
            }}
        </myConntextTask.Consumer>
    </div>;
  }
}
export default Login;