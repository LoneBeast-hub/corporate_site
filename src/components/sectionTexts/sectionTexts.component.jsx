import './sectionTexts.style.css';

const SectionTexts = ({label, titleNormal, titleBold, subtitle, color}) => {
    return(
        <div className={`section_texts ${color === 'black'? 'black' : ''} ${color === 'white'? 'white' : ''}`}>
            <p className='label'>{label}</p>
            <p className="title"><span className='bold'>{titleBold}</span> {titleNormal}</p>
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}

export default SectionTexts;