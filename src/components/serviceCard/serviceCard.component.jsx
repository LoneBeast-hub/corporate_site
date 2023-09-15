import './serviceCard.style.css';
import {FaLongArrowAltRight} from 'react-icons/fa';

const ServiceCard = ({img, title, info, key}) => {
    return(
        <div className="service_card col-6" key={key}>
            <div className="img">
                <img src={img} alt={title} />
            </div>
            <div className="body">
                <p className="title">{title}</p>
                <p className="info">{info}</p>
            </div>
            <div className="arrow">
                <FaLongArrowAltRight/>
            </div>
        </div>
    )
}

export default ServiceCard;