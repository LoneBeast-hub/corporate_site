import './testimonial.style.css';
import SectionTexts from '../sectionTexts/sectionTexts.component';
import TestimonialCard from '../testimonialCard/testimonialCard.component';
import WomanOne from '../../assets/woman_one.png';
import WomanTwo from '../../assets/woman_two.png';
import WomanThree from '../../assets/woman_three.png';


// Testimonial Data
const testimonialData = [
    {
        clientImg: WomanOne,
        clientComment: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
        clientName: 'Michkel Anegl',
        clientWork: 'Marketing Management'
    },
    {
        clientImg: WomanTwo,
        clientComment: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
        clientName: 'Michkel Anegl',
        clientWork: 'Marketing Management'
    },
    {
        clientImg: WomanThree,
        clientComment: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
        clientName: 'Michkel Anegl',
        clientWork: 'Marketing Management'
    }
]

const Testimonial = () => {
    return(
        <section className="testimonial">
            <SectionTexts
             label='Testimonial'
             titleBold='What'
             titleNormal='People Say'
             subtitle='Lorem ipsum dolor sit amet, consectetur 
             adipiscing elit. Nullam eget leo quis 
             justo feugiat tincidunt.'
            />
            <div className="testimonials">
                {
                    testimonialData.map(({clientImg, clientComment, clientName, clientWork}, index) => {
                        return(
                            <TestimonialCard
                             key={index}
                             clientImg={clientImg}
                             clientComment={clientComment}
                             clientName={clientName}
                             clientWork={clientWork}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonial;