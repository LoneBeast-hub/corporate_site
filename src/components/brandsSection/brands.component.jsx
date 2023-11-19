// styles
import './brands.style.css';
// imgs
import ClientOne from '../../assets/client-1.png';
import ClientTwo from '../../assets/client-2.png';
import ClientThree from '../../assets/client-3.png';
import ClientFour from '../../assets/client-4.png';
import ClientFive from '../../assets/client-5.png';

// brandImgs
const brandImgs = [
    ClientOne,
    ClientTwo,
    ClientThree,
    ClientFour,
    ClientFive
]

const Brands = () => {
    return(
        <section className="brands">
            {
                brandImgs.map((brand, index) => {
                    // render all brand imgs
                    return(
                        <div className="img" key={index}>
                            <img src={brand} alt={`${brand}`} />
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Brands;