import React from 'react';

class HomePage extends React.Component {
  render() {
    return <div>
        <div className="row mt-5">
            <div className="col">
                <p className='text-left'>What is React?</p>
                <p className='text-left'>React (also known as React.js or ReactJS) is a free and 
                open-source front-end JavaScript library for building user interfaces based on UI components. 
                It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
            </div>
        </div>
    </div>;
  }
}

export default HomePage;        