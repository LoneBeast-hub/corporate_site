import './header.style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({white, black}) => {
    // toggleState
    const [toggleMenuState, setToggleMenuState] = useState(false);

    const linkObj = [
        {
            linkName: 'Home',
            linkPath: '/'
        },
        {
            linkName: 'About',
            linkPath: '/about'
        },
        {
            linkName: 'Services',
            linkPath: '/services'
        },
        {
            linkName: 'Contact',
            linkPath: '/contact'
        },
        {
            linkName: 'Blog',
            linkPath: '/blogs'
        },
        {
            linkName: 'Portfolio',
            linkPath: '/portfolio'
        }
    ]

    // toggle Menu Function
    const toggleMenu = () => {
        return setToggleMenuState(!toggleMenuState)
    }

    return(
        <header className='header'>
            <div className="header_wrapper">
                {/* Logo */}
                <div className={`logo ${white? 'white' : ''} ${black? 'black' : ''}`}>LodCreations</div>
                {/* Links */}
                <nav className={`${toggleMenuState? 'show_menu' : ''}`}>
                    <ul>
                        {linkObj.map((link, index) => {
                            return <li key={index}><Link to={link.linkPath} className={`${white? 'white' : ''} ${black? 'black' : ''}`}> {link.linkName} </Link></li>
                        })}
                    </ul>
                </nav>
                <GiHamburgerMenu className={`menu_bar ${toggleMenuState? 'shift_menu_bar' : ''} ${black? 'black' : ''}`} onClick={toggleMenu}/>
            </div>
        </header>
    )
}

export default Header;