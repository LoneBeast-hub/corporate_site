import './rating.style.css'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Rating = ({ filledStars, totalStars }) => {
  const starArray = [];

  for (let i = 0; i < totalStars; i++) {
    // push filled stars into array
    if (i < filledStars) {
        starArray.push(<AiFillStar className='filled' key={i} />);
    } else {
        // push unfilled stars into array
        starArray.push(<AiOutlineStar className='unfilled' key={i} />);
    }
  }

  return (
    <div>
      {starArray.map((star, index) => (
        <span key={index} className='stars'>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
