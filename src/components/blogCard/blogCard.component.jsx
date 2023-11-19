// styles
import './blogCard.style.css';
// components
import CustomButton from '../customButton/customButton.component';
// react router
import { Link } from 'react-router-dom';

const BlogCard = ({imgUrl, date, author, title, info, id}) => {
    const blogPageState = {
        imgUrl,
        date,
        author,
        title,
        info,
        id
    }
    // blog card style variable
    const blogCardStyle = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover'
    }
    return(
        // blog card
        <div className="blog_card col-6" style={blogCardStyle}>
            {/* blog card content */}
            <div className="blog_card_content">
                {/* label containing date and author */}
                <div className="label">
                    <p className="date">{date}</p>
                    <span className='dot'></span>
                    <p className="author">by {author}</p>
                </div>
                {/* blog title */}
                <p className="title">{title}</p>
                {/* blog card info */}
                <div className="info_wrapper">
                    <p className="info">{info}</p>
                    <Link to={`/blogs/${id}`} state={blogPageState}><CustomButton normalColored>Read more</CustomButton></Link>
                </div>
            </div>
            {/* black opacity overlay */}
            <div className="blog_card_bg_overlay"></div>
        </div>
    )
}

export default BlogCard;