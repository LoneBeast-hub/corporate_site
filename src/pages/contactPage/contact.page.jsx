// styles
import './contact.styles.css';
// components
import Header from '../../components/headerSection/header.component';
import SectionTexts from '../../components/sectionTexts/sectionTexts.component';
import CustomButton from '../../components/customButton/customButton.component';
// svgs
import Phone from '../../assets/phone.svg';
import Location from '../../assets/location.svg';
import Clock from '../../assets/clock.svg';
// img
import ContactImg from '../../assets/contact_location_img.png';

const contactCardsData = [
    {
        imgUrl: Location,
        title: 'Address',
        info: '123 Ave, Lorem City, site Country, The World'
    },
    {
        imgUrl: Phone,
        title: 'Phone Number',
        info: '(001) 123456789 - 234567891 <br/> info@phloxbusiness.com'
    },
    {
        imgUrl: Clock,
        title: 'Working Hours',
        info: 'Monday - Friday: 09.00 - 23.00 <br/> Sunday: 09.00 - 16.00'
    }
]

const ContactPage = () => {
    return(
        <>
            <Header black/>
            <div className='contact_section'>
                <SectionTexts
                 label='Contact Us'
                 titleBold='Stay In Touch'
                 titleNormal='With Us'
                 subtitle='When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.' 
                />
                {/* contact cards */}
                <div className="contact_cards">
                    {
                        contactCardsData.map(({imgUrl, title, info}, index) => {
                            return(
                                <div className="contact_card" key={index}>
                                    {/* icon */}
                                    <div className='icon'>
                                        <img src={imgUrl} alt="" />
                                    </div>
                                    {/* Title */}
                                    <p className="title">{title} :</p>
                                    <p className="info" dangerouslySetInnerHTML={{__html: info}}></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* form and map image container */}
            <section className='form_map'>
                {/* children wrapper */}
                <div className="form_map_wrapper">
                    <div className="info">
                        {/* label */}
                        <p className="label">Contact Us</p>
                        <div className="big">
                            <p>
                                <span className='bold'>Get In</span> Touch
                            </p>
                        </div>
                        <div className="text">
                            <p>
                            When, while lovely valley teems with vapour around meand
                            </p>
                        </div>
                        {/* contact form */}
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
                    <div className="img">
                        <img src={ContactImg} alt="" />
                    </div>
                </div>
            </section>
            {/* map embed */}
            <div className='map_embed'>
                <iframe
                title="Google Map of Oslo, Norway"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41920.218396236254!2d10.698185382885024!3d59.9157583281728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo%2C%20Norway!5e0!3m2!1sen!2sng!4v1700423908944!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default ContactPage;