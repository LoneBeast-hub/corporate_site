import './ctaSection.style.css';
import CtaImg from '../../assets/men-data.png';
import CustomButton from '../customButton/customButton.component';

const CTASection = () => {
    return(
        <section className='cta_section'>
            <div className="cta_section_wrapper">
                <div className="info">
                    <p className="label">Start Your Project</p>
                    <div className="big">
                        <p>
                            <span className='bold'>Grow Your Business</span> With Our Strategy
                        </p>
                    </div>
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam eget leo quis justo feugiat tincidunt. Fusce eu 
                            felis non felis scelerisque vestibulum. Sed id ipsum 
                            vitae elit dapibus fringilla. Maecenas 
                        </p>
                    </div>
                    <div className="cta_buttons">
                        <CustomButton accentColored>Try It Now</CustomButton>
                        <CustomButton primaryColored>Explore More</CustomButton>
                    </div>
                </div>
                <div className="img">
                    <img src={CtaImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default CTASection;