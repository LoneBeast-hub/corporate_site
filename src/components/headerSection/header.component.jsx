import './header.style.css';
import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({white, black}) => {
    const linkObj = [
        {
            linkName: 'Home',
            linkPath: '/'
        },
        {
            linkName: 'About',
            linkPath: '/'
        },
        {
            linkName: 'Services',
            linkPath: '/'
        },
        {
            linkName: 'Blog',
            linkPath: '/'
        },
        {
            linkName: 'Portfolio',
            linkPath: '/'
        }
    ]
    return(
        <header className='header'>
            <div className="header_wrapper">
                {/* Logo */}
                <div className={`logo ${white? 'white' : ''} ${black? 'black' : ''}`}>LodCreations</div>
                {/* Links */}
                <nav>
                    <ul>
                        {linkObj.map((link, index) => {
                            return <li key={index}><Link to={link.linkPath} className={`${white? 'white' : ''} ${black? 'black' : ''}`}> {link.linkName} </Link></li>
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;