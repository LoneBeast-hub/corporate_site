// styles
import './portfolio.style.css';
// components
import Header from '../../components/headerSection/header.component';
// react hooks
import { useState } from 'react';
// objects
import { portfolioData } from '../../data/portfolioData';
import PortfolioCard from '../../components/portfolioCard/portfolioCard.component';

const PortfolioPage = () => {
    // const [filterColor, setFilterColor] = useState({
    //     allColor: false,
    //     BSColor: false,
    //     DEColor: false,
    //     Ecom: false
    // })
    return(
        <>
            <Header black/>
            <section className="portfolio_section">
                <p className="label">Portfolio</p>
                {/* title and filters */}
                <div className='title_filters'>
                    {/* title */}
                    <p className="title"><span className='bold'>latest</span> work</p>
                    {/* filters */}
                    {/* <div className='filters'> */}
                        {/* filter */}
                        {/* <p className={`filter`}>All</p> */}
                        {/* filter */}
                        {/* <p className={`filter`}>Branding Strategy</p> */}
                        {/* filter */}
                        {/* <p className={`filter`}>Digital Experience</p> */}
                        {/* filter */}
                        {/* <p className={`filter`}>Ecommerce</p> */}
                    {/* </div> */}
                </div>
                {/* portfolio items */}
                <div className="portfolio_items row">
                    {/* <Slider/> */}
                    {
                        portfolioData.map(({img, title, label}, index) => {
                            return <div className='col-4' key={index}>
                                <PortfolioCard
                                 img={img}
                                 title={title}
                                 label={label}
                                 />
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default PortfolioPage;