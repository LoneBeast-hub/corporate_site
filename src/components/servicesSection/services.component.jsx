import './services.style.css';
import ServiceCard from '../serviceCard/serviceCard.component';
import CustomButton from '../customButton/customButton.component';
import SectionTexts from '../sectionTexts/sectionTexts.component';
import DAImg from '../../assets/data_analysis.png';
import SOImg from '../../assets/seo_optimization.png';
import SDImg from '../../assets/security_data.png';
import BSImg from '../../assets/branding_strategy.png';

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
    }
]

const Services = () => {
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
                {serviceData.map((service, index) => {
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
            <CustomButton accentColored >View All Services</CustomButton>
        </section>
    )
}

export default Services;