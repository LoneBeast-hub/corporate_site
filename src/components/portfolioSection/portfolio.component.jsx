import './portfolio.style.css';
import Slider from '../slider/slider.component';

const Portfolio = () => {
    return(
        <section className="portfolio">
            <p className="label">Portfolio</p>
            <p className="title"><span className='bold'>latest</span> work</p>
            <Slider selectCount={5}/>
        </section>
    )
}

export default Portfolio;