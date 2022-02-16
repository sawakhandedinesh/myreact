import React from 'react';
import Clicked from './Clicked';
import Hover from './Hover';

class HOCHome extends React.Component {
  render() {
    return <div className='container'>
        <p className='mt-1'>
        <Clicked/>
        </p>
        <p className='mt-1'>
        <Hover/>
        </p>
    </div>;
  }
}
export default HOCHome;