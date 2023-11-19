// imgs
import CTAimg from '../../assets/about_cta_img.png';
// Section Components
import AboutHero from '../../components/aboutHeroSection/aboutHero.component';
import CTASection from '../../components/ctaSection/ctaSection.component';
import AboutValue from '../../components/aboutValueSection/aboutValue.component';
import AboutLaunched from '../../components/aboutLaunched/aboutLaunched.component';
import AboutTeam from '../../components/aboutTeam/aboutTeam.component';

const AboutPage = () => {
    return(
        <>
            <AboutHero />
            <CTASection img={CTAimg} />
            <AboutValue/>
            <AboutLaunched />
            <AboutTeam />
        </>
    )
}

export default AboutPage;