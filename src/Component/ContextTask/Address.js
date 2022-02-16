import React, { Component } from 'react';
import Table from './Table';
import myConntextTask from './ContextTaskApi';


class Address extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         header:["city","state","country"]
      }
    }
    
  render() {
    return <div className='container'>
        <myConntextTask.Consumer>
            {(contextData)=>{
                return  contextData.length > 0 ? (<p><Table 
                header={this.state.header} 
                data={[
                    contextData[0].location.city,
                    contextData[0].location.state,
                    contextData[0].location.country
                  ]}
                /></p>) : (
                    <div></div>
                  );
            }}
        </myConntextTask.Consumer>
    </div>;
  }
}
export default Address;