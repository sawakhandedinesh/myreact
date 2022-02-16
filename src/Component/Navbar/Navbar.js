import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return      <div>
                <nav className="navbar bg-dark navbar-dark p-2">
                    <div className='container'>
                       <Link to="/HomePage" className='navbar-brand'>React UI</Link>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/Home" className="nav-link text-white">ChatApp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/AxiosUser" className="nav-link text-white">Axios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/AxiosAsyncAwait" className="nav-link text-white">Async-Axios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/ContextAPI" className="nav-link text-white">Context-Api</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Scroll" className="nav-link text-white">Infinite Scroll</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/UserScroll" className="nav-link text-white">User Scroll</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/HOC" className="nav-link text-white">HOC</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/ContextTaskAPI" className="nav-link text-white">ContextTask API</Link>
                                </li>
                            </ul>
                    </div>
                </nav></div>;
           
  }
}

export default Navbar;