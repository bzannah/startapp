import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    //setTimeout(() => {
    //    props.history.push('/about')
    //}, 2000);

    // NavLink makes the target Link with class active
    return (
        <nav className="nav-wrapper teal darken-4">
            <div className="container">
                <Link to="/" className="brand-logo">Toke'Times</Link>
                <ul className="right">
                    <li><Link to='/' className="teal darken-4">Home</Link></li>
                    <li><NavLink to='/about' className="teal darken-4">About</NavLink></li>
                    <li><Link to='/contact' className="teal darken-4">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar); // higher order components. To add more useful props parameters 
