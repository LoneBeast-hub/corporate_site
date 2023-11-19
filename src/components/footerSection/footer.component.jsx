// styles
import './footer.style.css';
// components
import CustomButton from '../customButton/customButton.component';
// React icons
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
// react router
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <section className="footer">
            <div className="super_footer">
                <div className="adjust">
                    <div className="texts">
                        <p className="title">We Offer Awesome Services</p>
                        <p className="subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt.
                        </p>
                    </div>
                    <div className="subscribe">
                        <input
                        type="text"
                        placeholder='Enter Your Email Address'
                        />
                        <CustomButton primaryColored>Subscribe</CustomButton>
                    </div>
                </div>
            </div>
            <div className="sub_footer">
                <div className="adjust row">
                    {/* Logo */}
                    <div className="logo_wrapper col-6">
                        <div className="logo">LodCreations</div>
                        <div className="info">
                            When, while lovely valley teems vapour aroundmeand meridian sun strikes the upper impenetrable 
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="col-6 quick_links">
                        <p className="title">Quick Links</p>
                        <ul className='info'>
                            <li className='link'><Link to='/'>Home</Link></li>
                            <li className='link'><Link to='/about'>About</Link></li>
                            <li className='link'><Link to='/services'>Services</Link></li>
                            <li className='link'><Link to='/contact'>Contact</Link></li>
                            <li className='link'><Link to='/blogs'>Blog</Link></li>
                            <li className='link'><Link to='/portfolio'>portfolio</Link></li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div className="col-6 resources">
                        <p className="title">Resources</p>
                        <ul className='info'>
                            <li className='link'>Art Desing</li>
                            <li className='link'>Computer</li>
                            <li className='link'>IT News</li>
                            <li className='link'>Networking</li>
                            <li className='link'>Web Security</li>
                        </ul>
                    </div>
                    {/* Contact us */}
                    <div className="col-6 contact_us">
                        <p className="title">Contact Us</p>
                        <ul className='info'>
                            <li>
                                <span className='bold'>Address: </span>John C. Doe XXXX Coding Street Frontend Villa, Tx XXXXX
                            </li>
                            <li>
                                <span className='bold'>Phone: </span>+11111111111
                            </li>
                            <li>
                                <span className='bold'>Email: </span>Info@yourdomain.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyrights">
                    <p>&copy; 2023 LodCreations. All Rights Reserved</p>
                    <div className="socials">
                        <span><BiLogoInstagram/></span>
                        <span><BiLogoLinkedin/></span>
                        <span><BiLogoFacebook/></span>
                        <span><BiLogoTwitter/></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;