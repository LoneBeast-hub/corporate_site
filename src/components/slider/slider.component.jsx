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

import SliderCard from '../sliderCard/sliderCard.component';
// import images
import NMImg from '../../assets/novel_mockup.jpg';
import PPImg from '../../assets/purinky_products.jpg';
import SPImg from '../../assets/satisfy_poster.jpg';
import MTImg from '../../assets/mockup_template.jpg';
import LPImg from '../../assets/landing_page.jpg';

// slider data
const sliderData = [
    {
        img: NMImg,
        title: 'Novel Mockup',
        label: 'Branding Strategy'
    },
    {
        img: PPImg,
        title: 'Purinky Products',
        label: 'Digital Experience'
    },
    {
        img: SPImg,
        title: 'Satisfy Poster',
        label: 'Branding Strategy'
    },
    {
        img: MTImg,
        title: 'Mockup Template',
        label: 'Experience'
    },
    {
        img: LPImg,
        title: 'Landing Page',
        label: 'Digital Experience'
    }
]

const Slider = () => {
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
    
    return (
    <>
        <Swiper className="container testimonials_container"
        pagination={true} modules={[Pagination]}
        slidesPerView={slidesPerView} spaceBetween={0}>
        {
            sliderData.map(({img, title, label}, index) => {
            return(
                <SwiperSlide className='testimonial' key={index}>
                    <SliderCard
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