import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from './auth';

function Navbar({ searchTerm, setSearchTerm }) {
    const handleSearch = () => {
        setSearchTerm(searchTerm);
    };
    const auth = useAuth()

    return (
        <>
            <nav  id ="top" className="navbar navbar-expand-lg text-light" style={{ background: 'linear-gradient(-225deg, #3e336d, #3584a7 51%, #30d2be)' }}>
                <div className="container-fluid">
                    <Link to="/home" className='nav-link' style={{ letterSpacing: '0em', fontFamily: '', fontSize: '1.5rem', paddingRight: '20px' }}>
                        <i className="fa fa-book-open-reader" style={{ color: "", paddingRight: "10px", letterSpacing: '0.1em' }} /> Read Rave
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className='nav-link text-light float-shadow'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className='nav-link text-light float-shadow'>About Us</Link>
                            </li>
                            <li className="nav-item">


                                {
                                    !auth.user && <Link to="/login" className='nav-link text-light float-shadow'>Login</Link>
                                }

                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className='nav-link text-light float-shadow'><i className='fa fa-user' />  Profile</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search for Books"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-info float-shadow" type="button" onClick={handleSearch}>
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;