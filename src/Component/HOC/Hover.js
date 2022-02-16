import React from 'react';
import HOC from './HOC';
class Hover extends React.Component {

  render() {
    return <div className='container'>
        <span onMouseOver={this.props.updateCount}>
        Hover me {Object.keys(this.props).length > 0? this.props.count:0} times
        </span>
    </div>;
  }
}
export default HOC(Hover);
