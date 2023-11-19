// styles
import './blog.style.css';
// Components
import Header from '../../components/headerSection/header.component';
// react router
import { useLocation } from 'react-router-dom';
// react icons
import { AiOutlineShareAlt } from 'react-icons/ai';
import CustomButton from '../../components/customButton/customButton.component';

const BlogPage = () => {
    const location = useLocation();
    const { imgUrl, author, date, info, title } = location.state;
    return(
        <>
            <Header black />
            <div className="blog_section">
                {/* blog img */}
                <div className="blog_img">
                    <img src={imgUrl} alt="" />
                </div>
                {/* Blog title */}
                <p className='blog_title'>{title}</p>
                {/* label containing date and author */}
                <div className="label">
                    <p className="date">{date.toUpperCase()}</p>
                    <span className='dot'></span>
                    <p className="author">BY {author.toUpperCase()}</p>
                </div>
                <div className="adjuster">
                    {/* info - I'm dangrously rendering the info so as to apply the "<br />"*/}
                    <p className="info" dangerouslySetInnerHTML={{__html: info}}>
                    </p>
                    {/* Tags and share */}
                    <div className="tags_share">
                        <p className="tags">Tags: <span className="red">Blog</span></p>
                        {/* share icon */}
                        <div className='share_icon'>
                            <AiOutlineShareAlt />
                        </div>
                    </div>
                    {/* Comment section */}
                    <div className="comment_section">
                        <p className="title">Add a Comment</p>
                        <p className="subtitle">Your email address will not be published. Required fields are marked*</p>
                        <form action="mailto:info@example.com" method="post" enctype="text/plain">
                            {/* inputs */}
                            <div className='comment_inputs'>
                                {/* input (Name) */}
                                <input required className='comment_input' type="text" placeholder='Name (required)'/>
                                {/* input (Email) */}
                                <input required className='comment_input' type="email" placeholder='E-Mail (required)'/>
                            </div>
                            {/* input (Website) */}
                            <input required className='comment_input' type="text" placeholder='Website'/>
                            {/* input comment */}
                            <textarea required cols="30" rows="10" placeholder='Comment'></textarea>
                            <div className='button_placer'>
                                <CustomButton accentColored type='submit'>Send</CustomButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPage;