// styles
import './aboutTeamCard.styles.css';
// react icons
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi';

const AboutTeamCard = ({teamImg, teamName, teamPosition}) => {
    return(
        <div className="about_team_card">
            <div className="img">
                <img src={teamImg} alt="" />
            </div>
            <div className="body">
                <div className="texts">
                    <div className="team_details">
                        <p className="name">{teamName}</p>
                        <p className="work">{teamPosition}</p>
                    </div>
                </div>
                {/* icons */}
                <div className='social_icons'>
                    <BiLogoFacebook />
                    <BiLogoTwitter />
                    <BiLogoLinkedin />
                </div>
            </div>
        </div>
    )
}

export default AboutTeamCard;