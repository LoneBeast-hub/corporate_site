import './pricing.style.css';
import PriceCard from '../priceCard/priceCard.component';
import SectionTexts from '../sectionTexts/sectionTexts.component';

// Price data
const priceData = [
    {
        title: 'Designing',
        titleLabel: 'Process',
        price: 40,
        perks: [
            'creative design enabled',
            'vibrant color usage',
            'eye catching design',
            'extreme typography',
            'exceptional design'
        ]
    },
    {
        title: 'Developing',
        titleLabel: 'Product',
        price: 60,
        middle: true,
        perks: [
            'creative design enabled',
            'vibrant color usage',
            'eye catching design',
            'extreme typography',
            'exceptional design'
        ]
    },
    {
        title: 'Supporting',
        titleLabel: 'Clients',
        price: 80,
        perks: [
            'creative design enabled',
            'vibrant color usage',
            'eye catching design',
            'extreme typography',
            'exceptional design'
        ]
    }
]

const Pricing = () => {
    return(
        <section className="pricing">
            <div className="sub_bg">
                <SectionTexts
                 label='Price List'
                 titleNormal='Pricing'
                 titleBold='Our'
                 subtitle='Lorem ipsum dolor sit amet, consectetur 
                 adipiscing elit. Nullam eget leo quis 
                 justo feugiat tincidunt.'
                 color='white'
                />
            </div>
            <div className="price_list">
                {priceData.map(({title, titleLabel, price, middle, perks}, index) => {
                    return(<PriceCard
                        title={title}
                        titleLabel={titleLabel}
                        price={price}
                        perks={perks}
                        middle={middle}
                        key={index}
                    />)
                })}
            </div>
        </section>
    )
}

export default Pricing;