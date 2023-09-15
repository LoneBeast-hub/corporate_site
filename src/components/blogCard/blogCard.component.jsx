import './blogCard.style.css';
import CustomButton from '../customButton/customButton.component';

const BlogCard = ({imgUrl, date, author, title, info, key}) => {
    const blogCardStyle = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover'
    }
    return(
        <div className="blog_card col-6" style={blogCardStyle} key={key}>
            <div className="blog_card_content">
                <div className="label">
                    <p className="date">{date}</p>
                    <span className='dot'></span>
                    <p className="author">by {author}</p>
                </div>
                <p className="title">{title}</p>
                <div className="info_wrapper">
                    <p className="info">{info}</p>
                    <CustomButton normalColored>Read more</CustomButton>
                </div>
            </div>
            <div className="blog_card_bg_overlay"></div>
        </div>
    )
}

export default BlogCard;