import './hero.style.css';
import Header from '../headerSection/header.component';
import HeroImg from '../../assets/hero_img.png';
import CustomButton from '../customButton/customButton.component';

const Hero = () => {
    return(
        <section className='hero'>
            <Header white />
            <div className="hero_wrapper">
                <div className="info">
                    <div className="big">
                        <p>
                            <span className='bold'>Business Planning</span> Digital Technology
                        <span className='bold'> Modern Solution!</span></p>
                    </div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt. Fusce eu</p>
                    </div>
                    <div className="cta_buttons">
                        <CustomButton accentColored>Try It Now</CustomButton>
                        <CustomButton primaryColored>Explore More</CustomButton>
                    </div>
                </div>
                <div className="img">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero;