import './priceCard.style.css';
import CustomButton from '../customButton/customButton.component';
import {FaLongArrowAltRight} from 'react-icons/fa';

const PriceCard = ({title, titleLabel, price, perks, middle}) => {
    return(
        <div className={`price_card ${middle? 'middle_card' : ''}`}>
            <p className="price_overlay">{price}</p>
            <div className="main_info">
                <div className="title_info">
                    <p className="title">{title}</p>
                    <p className="title_label">{titleLabel}</p>
                </div>
                <div className="price_info">
                    <p className="dollar">$</p>
                    <p className="price">{price}</p>
                    <p className="price_label">Per Month</p>
                </div>
                <div className="perks_info">
                    {perks.map((perk, index) => {
                        const words = perk.split(' '); // Split the string into words
                        const firstWord = words[0]; // Get the first word
                        const restOfWords = words.slice(1).join(' '); // Get the rest of the words and join them

                        return (
                            <p className="perk" key={index}>
                                <span className="bold">{firstWord}</span> {restOfWords}
                            </p>
                        );
                    })}
                </div>
                <CustomButton accentColored paraStyled >
                    <span>Order Now</span>
                    <span className='arrow'><FaLongArrowAltRight/></span>
                </CustomButton>
            </div>
        </div>
    )
}

export default PriceCard;