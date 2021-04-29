import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom'
import { Button } from '../Button';
import './NavigationBar.css';


export const Navigation = () => {
    const [Click, SetClick] = useState(false)
    const [button, SetButton] = useState(true)

    const handleClick = () => SetClick(!Click)
    const closeMobileMenu = () => SetClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            SetButton(false)
        } else {
            
            SetButton(true)
        }
    }
        useEffect(() => {
            showButton();
          }, []);
        
        window.addEventListener('resize', showButton);

        
    

    return (
        <div className="navbar">
            <div className="navbar-container">

                <div className="menu-icon" onClick={handleClick}>
                    <i className={Click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={Click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/Home" className="nav-links" onClick={closeMobileMenu} >Home</Link>
                    </li >
                    <li className="nav-item">
                        <Link to="/About" className="nav-links" onClick={closeMobileMenu} >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-links" onClick={closeMobileMenu} >Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Feedbacks" className="nav-links" onClick={closeMobileMenu}>Feedbacks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Blogs" className="nav-links" onClick={closeMobileMenu}>Blogs</Link>
                    </li>
                  
                    <Link
                to='/Admin'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                ADMIN
              </Link>
                </ul>
                {button && <Button className="btn" buttonSize="btn--large" buttonStyle="btn--outline">ADMIN</Button>}
            </div>
            
        </div>
    )
}
