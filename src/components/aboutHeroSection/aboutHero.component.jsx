// styles
import './aboutHero.style.css';
// imgs
import HeroSuperImg from '../../assets/about_hero_img.png';
import HeroSubImg from '../../assets/about_hero_underlay_img.png';
// components
import Header from '../headerSection/header.component';
import CustomButton from '../customButton/customButton.component';

const AboutHero = () => {
    return(
        // hero
        <section className='about_hero'>
            {/* header: give children black color */}
            <Header black />
            {/* children wrapper */}
            <div className="about_hero_wrapper">
                {/* imgs */}
                <div className="imgs">
                    <img src={HeroSuperImg} alt="About Hero Super" className='super_img' />
                    <img src={HeroSubImg} alt="About Hero Sub" className='sub_img' />
                </div>
                {/* info */}
                <div className="info">
                    <div className='heading'>
                        {/* label */}
                        <p className="label">About Us</p>
                        <div className="big">
                            <p>
                                <span className='bold'>Good</span> Planning
                            </p>
                            <p><span className='bold'> Good</span> Business</p>
                        </div>
                    </div>
                    {/* subtitle */}
                    <p className="subtitle">
                        We now that good planning means good business
                    </p>
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt. Fusce eu
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt. Fusce eu
                        </p>
                    </div>
                    {/* buttons */}
                    <div className="cta_buttons">
                        <CustomButton accentColored>Try It Now</CustomButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero;