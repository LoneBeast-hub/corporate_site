// styles
import './services.style.css';
// components
import ServiceCard from '../serviceCard/serviceCard.component';
import CustomButton from '../customButton/customButton.component';
import SectionTexts from '../sectionTexts/sectionTexts.component';
// images
import DAImg from '../../assets/data_analysis.png';
import SOImg from '../../assets/seo_optimization.png';
import SDImg from '../../assets/security_data.png';
import BSImg from '../../assets/branding_strategy.png';
// react router
import { Link } from 'react-router-dom';

// service data
const serviceData = [
    {
        img: DAImg,
        title: 'Data Analysis',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt.'
    },
    {
        img: SOImg,
        title: 'SEO Optimization',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt.'
    },
    {
        img: SDImg,
        title: 'Security Data',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt.'
    },
    {
        img: BSImg,
        title: 'Branding Strategy',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt.'
    },
    {
        img: DAImg,
        title: 'Data Analysis',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt.'
    },
    {
        img: SOImg,
        title: 'SEO Optimization',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt.'
    },
    {
        img: SDImg,
        title: 'Security Data',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt.'
    },
    {
        img: BSImg,
        title: 'Branding Strategy',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo quis justo feugiat tincidunt.'
    }
]


const Services = ({selectCount, viewMore}) => {
    // Use slice to get the specified objects
    const selectedService = serviceData.slice(0, selectCount);
    return(
        <section className='services'>
            <SectionTexts
             label='Our Services'
             titleNormal='We Do'
             titleBold='What'
             subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
             color='black'
            />
            <div className="services_cards row">
                {selectedService.map((service, index) => {
                    return(
                        <ServiceCard
                         img={service.img} 
                         key={index}
                         title={service.title} 
                         info={service.info} 
                        />
                    )
                })}
            </div>
            {
                viewMore? <Link to='/services'><CustomButton accentColored >View All Services</CustomButton></Link> : ''
            }
        </section>
    )
}

export default Services;