// imgs
import CtaImg from '../../assets/men-data.png';
// Section components
import HomeHero from "../../components/homeHeroSection/homeHero.component";
import Services from '../../components/servicesSection/services.component';
import CTASection from "../../components/ctaSection/ctaSection.component";
import Portfolio from "../../components/portfolioSection/portfolio.component";
import Pricing from "../../components/pricingSection/pricing.component";
import Blogs from "../../components/blogsSection/blogs.component";
import Testimonial from "../../components/testimonialSection/testimonial.component";
import Brands from "../../components/brandsSection/brands.component";

const HomePage = () => {
    return(
        <>
            <HomeHero/>
            <Services selectCount={4} viewMore={1}/>
            <CTASection img={CtaImg}/>
            <Portfolio/>
            <Pricing/>
            <Blogs selectCount={4}/>
            <Testimonial/>
            <Brands/>
        </>
    )
}

export default HomePage;