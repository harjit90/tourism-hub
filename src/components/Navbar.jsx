import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {

    const [stickyHeader, setStickyHeader] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setStickyHeader(true)
        } else {
            setStickyHeader(false)
        }
        console.log(window.scrollY)
    }

    window.addEventListener('scroll', changeBackground)



    return (
        <>
            <header className={stickyHeader ? 'site-header sticky_header' : 'site-header'} >
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg header-navigation">
                        <div className='container'>

                            <NavLink className="navbar-brand" to="/">
                                <h3>Tourism <strong className='logoBoldText'>Hub</strong></h3>
                            </NavLink>

                            <div className='hamburgerMenu'>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className=""><IoMdMenu /></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse justify-content-end main-menu" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/service">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/product">Products</NavLink>
                                    </li>
                                    <li className="nav-item mr-2">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link site_btn my-2 my-sm-0 d-inline-block " to="/signup">Sign Up</NavLink>
                                        {/* <form className="form-inline my-2 my-lg-0">
                                            <button className="site_btn my-2 my-sm-0" type="submit">Sign Up</button>
                                            </form> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;