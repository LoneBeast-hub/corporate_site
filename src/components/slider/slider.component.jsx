// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './slider.style.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// hooks
import { useEffect, useState } from 'react';
// import required modules
import { Pagination } from 'swiper/modules';
// components
import PortfolioCard from '../portfolioCard/portfolioCard.component';
// slider data
import { portfolioData } from '../../data/portfolioData';

const Slider = ({ selectCount }) => {
    const [slidesPerView, setSlidesPerView] = useState(3); // Default value for desktop screens

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 768) {
            setSlidesPerView(1); // For mobile screens
          } else if (window.innerWidth < 992) {
            setSlidesPerView(2); // For tablet screens
          } else {
            setSlidesPerView(3); // For desktop screens
          }
        }
    
        // Add a resize event listener to update slidesPerView on window resize
        window.addEventListener('resize', handleResize);
    
        // Initial call to set the correct slidesPerView based on the initial window width
        handleResize();
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

        // Use slice to get the first 4 objects
        const selectedCards = portfolioData.slice(0, selectCount);
    
    return (
    <>
        <Swiper className="container testimonials_container"
        pagination={true} modules={[Pagination]}
        slidesPerView={slidesPerView} spaceBetween={0}>
        {
            selectedCards.map(({img, title, label}, index) => {
            return(
                <SwiperSlide className='testimonial' key={index}>
                    <PortfolioCard
                     img={img}
                     title={title}
                     label={label}
                    />
                </SwiperSlide>
            )
            })
        }
        </Swiper>
    </>
    );
}

export default Slider;