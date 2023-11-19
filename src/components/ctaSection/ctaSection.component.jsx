// styles
import './ctaSection.style.css';
// components
import CustomButton from '../customButton/customButton.component';

const CTASection = ({img}) => {
    return(
        // cta section
        <section className='cta_section'>
            {/* children wrapper */}
            <div className="cta_section_wrapper">
                <div className="info">
                    {/* label */}
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
                    {/* buttons */}
                    <div className="cta_buttons">
                        <CustomButton accentColored>Try It Now</CustomButton>
                        <CustomButton primaryColored>Explore More</CustomButton>
                    </div>
                </div>
                <div className="img">
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default CTASection;