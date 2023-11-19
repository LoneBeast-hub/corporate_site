import './testimonialCard.style.css';
import Rating from '../rating/rating.component';
import { CgQuote } from 'react-icons/cg';

const TestimonialCard = ({clientImg, clientComment, clientName, clientWork, index}) => {
    return(
        <div className="testimonial_card">
            <div className="img">
                <img src={clientImg} alt="" />
            </div>
            <div className="body">
                <div className="rating_wrapper">
                    {/* rating */}
                    <Rating filledStars={3} totalStars={5}/>
                    <CgQuote className="quote"/>
                </div>
                <div className="texts">
                    <p className="comment">{clientComment}</p>
                    <div className="client_details">
                        <p className="name">{clientName}</p>
                        <p className="work">{clientWork}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;