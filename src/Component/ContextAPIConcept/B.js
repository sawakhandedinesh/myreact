import React from 'react';
import C from './C';

class B extends React.Component {
  render() {
    return <div >
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">B</div>
                    <div className="card-body">
                        <C/>
                    </div>
                </div>
            </div>
        </div>
    </div>;
  }
}
export default B;
