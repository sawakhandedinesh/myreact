import React from 'react';

class PageNotFound extends React.Component {
  render() {
    return <div>
      <div className="row m-5">
        <div className="col">
          <h1 className='text-center text-danger'>404 - Page not found!!!</h1>
        </div>
      </div>
    </div>;
  }
}

export default PageNotFound;
