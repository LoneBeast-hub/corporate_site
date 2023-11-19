// styles
import './aboutValue.style.css';
// components
import CustomButton from '../customButton/customButton.component';
import AboutValueCard from '../aboutValueCard/aboutValueCard.component';
// svgs
import Cup from '../../assets/cup.svg';
import Target from '../../assets/target.svg';
import Pen from '../../assets/pen.svg';
import Headphone from '../../assets/headphone.svg';

// functional Component
const AboutValue = () => {
    const valueCardData = [
        {
            logoUrl: Cup,
            title: 'Digital Marketing',
            info: 'While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.'
        },
        {
            logoUrl: Target,
            title: 'Branding',
            info: 'While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.'
        },
        {
            logoUrl: Pen,
            title: 'Graphic Design',
            info: 'While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.'
        },
        {
            logoUrl: Headphone,
            title: 'Support 24/7',
            info: 'While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.'
        },
    ]
    // render
    return(
        // cta section
        <section className='about_value'>
            {/* children wrapper */}
            <div className="about_value_wrapper">
                <div className="info">
                    {/* label */}
                    <p className="label">Our Values</p>
                    <div className="big">
                        <p>
                            <span className='bold'>We Work to Understand</span> Our Customer
                        </p>
                    </div>
                    <div className="text">
                        <p>
                        When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when I hear the buzz the little world among the stalks, and grow familiar with the countless indescribable.
                        <br/><br/>forms of the insects and flies, then I feel the presence of the Almighty, who formed .
                        </p>
                    </div>
                    {/* buttons */}
                    <div className="cta_buttons">
                        <CustomButton accentColored>Try It Now</CustomButton>
                    </div>
                </div>
                <div className="value_list row">
                    {
                        valueCardData.map(({logoUrl, title, info}, index) => {
                            return(
                                <AboutValueCard 
                                 logoUrl={logoUrl}
                                 title={title}
                                 info={info}
                                 key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutValue;