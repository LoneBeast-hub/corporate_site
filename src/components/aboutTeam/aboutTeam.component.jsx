// styles
import AboutTeamCard from '../aboutTeamCard/aboutTeamCard.component';
import './aboutTeam.styles.css';
// images
import TeamOne from '../../assets/about_team_one.png';
import TeamTwo from '../../assets/about_team_two.png';
import TeamThree from '../../assets/about_team_three.png';
import TeamFour from '../../assets/about_team_four.png';

const aboutTeamData = [
    {
        teamName: 'Sarah Willson',
        teamPosition: 'Designer',
        teamImg: TeamOne
    },
    {
        teamName: 'Angelo Garner',
        teamPosition: 'Co-founder',
        teamImg: TeamTwo
    },
    {
        teamName: 'Dexter Matthew',
        teamPosition: 'Co-founder',
        teamImg: TeamThree
    },
    {
        teamName: 'Eanna Philandros',
        teamPosition: 'Product Manager',
        teamImg: TeamFour
    }
]

const AboutTeam = () => {
    return(
        // About team
        <div className='about_team'>
            {/* wrapper */}
            <div className="about_team_wrapper">
                {/* label */}
                <p className='label'>Our Members</p>
                {/* title */}
                <div className='title'>
                    <p><span className="bold">Say Hello to</span> Our Team</p>
                </div>
                {/* About team cards */}
                <div className="about_team_cards">
                    {
                        aboutTeamData.map(({teamName, teamPosition, teamImg}, index) => {
                            return(
                                <AboutTeamCard
                                 key={index}
                                 teamName={teamName}
                                 teamPosition={teamPosition}
                                 teamImg={teamImg} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutTeam;