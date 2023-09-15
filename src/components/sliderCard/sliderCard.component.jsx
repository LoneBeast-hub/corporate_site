import './sliderCard.style.css';

const SliderCard = ({img, title, label}) => {
    return(
        <div className="slider_card">
            <div className="img">
                <img src={img} alt={title} />
            </div>
            <div className="body">
                <p className="title">{title}</p>
                <p className="label">{label}</p>
            </div>
        </div>
    )
}

export default SliderCard;