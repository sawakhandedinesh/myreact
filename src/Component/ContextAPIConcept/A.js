import React from 'react';
import B from './B';
import myContext from './ContextApi';


class A extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Dinesh',
         city:'Mumbai'
      }
    }
    
  render() {
    return <div className='mt-5'>
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">A</div>
                    <div className="card-body">
                        <myContext.Provider value={this.state}>
                            <B/>
                        </myContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    </div>;
  }
}
export default A;
