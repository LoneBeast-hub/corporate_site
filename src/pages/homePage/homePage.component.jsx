import Hero from "../../components/heroSection/hero.component";
import Services from "../../components/servicesSection/services.component";
import CTASection from "../../components/ctaSection/ctaSection.component";
import Portfolio from "../../components/portfolioSection/portfolio.component";
import Pricing from "../../components/pricingSection/pricing.component";
import Blog from "../../components/blogSection/blog.component";
import Testimonial from "../../components/testimonialSection/testimonial.component";
import Brands from "../../components/brandsSection/brands.component";
import Footer from "../../components/footerSection/footer.component";

const HomePage = () => {
    return(
        <>
            <Hero/>
            <Services/>
            <CTASection/>
            <Portfolio/>
            <Pricing/>
            <Blog/>
            <Testimonial/>
            <Brands/>
            <Footer/>
        </>
    )
}

export default HomePage;