import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../../logos/brand.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand" href="/"><img src={brand} alt="" style={{width:'25%'}}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Donation</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/events" className="nav-link">Events</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blog</a>
                        </li>
                    </ul>
                    <Link to='/registration'><button className="btn btn-primary mx-2" type="submit">Register</button></Link>
                    <Link to='/admin'><button className="btn btn-dark mx-2" type="submit">Admin</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;