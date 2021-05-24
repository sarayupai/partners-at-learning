import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import '../App.css';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
                <Link to={process.env.PUBLIC_URL + '/'} className='navbar-logo' onClick={closeMobileMenu}>
                    <i className='fas fa-calculator'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to={process.env.PUBLIC_URL + '/'} className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={process.env.PUBLIC_URL + '/activities'} className='nav-links' onClick={closeMobileMenu}>
                            Activities
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={process.env.PUBLIC_URL + '/resources'} className='nav-links' onClick={closeMobileMenu}>
                            Resources
                        </Link>
                    </li>

                    <li>
                        <Link to={process.env.PUBLIC_URL + '/about'} className='nav-links-mobile' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>About</Button>}
            </div>
          </nav>   
        </>
    );
}

export default Navbar;
