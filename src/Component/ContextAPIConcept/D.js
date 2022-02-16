import React from 'react';
import myContext from './ContextApi';

class D extends React.Component {
    render() {
        return <div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">D</div>
                        <div className="card-body">
                            <myContext.Consumer>
                                {
                                    (data)=>{
                                        return(
                                            <div>
                                                <p>{data.name}</p>
                                                <p>{data.city}</p>
                                            </div>
                                        )
                                    }
                                }
                            </myContext.Consumer>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
      }
}
export default D;
