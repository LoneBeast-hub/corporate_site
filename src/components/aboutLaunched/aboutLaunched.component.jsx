// styles
import './aboutLaunched.styles.css';
// components
import CustomButton from '../customButton/customButton.component';

const AboutLaunched = () => {
    return(
        <div className="about_launched">
            {/* Wrapper */}
            <div className="about_launched_wrapper">
                {/* amount */}
                <p className="amount">48</p>
                {/* line */}
                <div className="line"></div>
                <div className='flex_group'>
                    {/* info */}
                    <div className="info">
                        {/* title */}
                        <p className="title"><span className='big'>Project</span> Launched</p>
                        {/* subtitle */}
                        <p className="subtitle">While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.</p>
                    </div>
                    {/* cta */}
                    <div className="cta">
                        <CustomButton accentColored>Start today</CustomButton>
                        <CustomButton primaryColored>Portfolio</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutLaunched;