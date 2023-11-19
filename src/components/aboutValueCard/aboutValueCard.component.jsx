// styles
import './aboutValueCard.style.css';

const AboutValueCard = ({logoUrl, title, info}) => {
    return(
        <div className="about_value_card col-6">
            {/* Image Logo */}
            <img src={logoUrl} alt="" className="img" />
            {/* Title */}
            <p className="title">
                {title}
            </p>
            {/* info */}
            <p className="info">
                {info}
            </p>
        </div>
    )
}

export default AboutValueCard;