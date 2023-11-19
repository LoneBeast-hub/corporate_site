// components
import ServicesHero from '../../components/servicesHero/servicesHero.component';
import Services from '../../components/servicesSection/services.component';

const ServicesPage = () => {
    return(
        <>
            <ServicesHero />
            <Services selectCount={8} viewMore={0} />
        </>
    )
}

export default ServicesPage;