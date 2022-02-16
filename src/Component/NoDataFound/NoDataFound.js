import React from 'react';

class NoDataFound extends React.Component {
  render() {
    return <div>
        <div className="row m-5">
            <div className="col">
                <h1 className='text-center text-primary'>No data found</h1>
            </div>
        </div>
    </div>;
  }
}

export default NoDataFound;
