import React from 'react';
import D from './D';

class C extends React.Component {
    render() {
        return <div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">C</div>
                        <div className="card-body">
                            <D/>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
      }
}
export default C;
