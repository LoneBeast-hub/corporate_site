// styles
import './homeHero.style.css';
// components
import CustomButton from '../customButton/customButton.component';
import Header from '../headerSection/header.component';
// imgs
import HeroImg from '../../assets/home_hero_img.png';

const HomeHero = () => {
    return(
        // hero
        <section className='home_hero'>
            {/* header: give children white color */}
            <Header white />
            {/* children wrapper */}
            <div className="home_hero_wrapper">
                {/* info */}
                <div className="info">
                    <div className="big">
                        <p>
                            <span className='bold'>Business Planning</span> Digital Technology
                        <span className='bold'> Modern Solution!</span></p>
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

export default HomeHero;