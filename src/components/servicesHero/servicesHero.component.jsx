// styles
import './servicesHero.styles.css';
// components
import CustomButton from '../customButton/customButton.component';
import Header from '../headerSection/header.component';
// imgs
import HeroImg from '../../assets/services_hero.png';

const ServicesHero = () => {
    return(
        // hero
        <section className='services_hero'>
            {/* header: give children white color */}
            <Header white />
            {/* children wrapper */}
            <div className="services_hero_wrapper">
                {/* info */}
                <div className="info">
                    <p className="label">Platform Base Technology</p>
                    <div className="big">
                        <p>
                            <span className='bold'>Get Inspired To Achieve</span> Enhanced Outcomes
                        </p>
                    </div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt. Fusce eu</p>
                    </div>
                    {/* buttons */}
                    <div className="cta_buttons">
                        <CustomButton accentColored>Try It Now</CustomButton>
                        <CustomButton primaryColored>Explore More</CustomButton>
                    </div>
                </div>
                {/* img */}
                <div className="img">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default ServicesHero;