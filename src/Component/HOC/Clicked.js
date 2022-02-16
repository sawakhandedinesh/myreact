import React from 'react';
import HOC from './HOC';
class Clicked extends React.Component {
  render() {
    return <div className='container'>
        <p>
        Clicked me {Object.keys(this.props).length > 0? this.props.count:0} times
        </p>
        <button className="btn btn-primary" onClick={this.props.updateCount}>
          Update Count
        </button>
    </div>;
  }
}
export default HOC(Clicked);
