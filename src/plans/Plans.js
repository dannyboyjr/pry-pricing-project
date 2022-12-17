import Pro from "./Pro"
import Solo from "./Solo"
import Custom from './Custom'
import ImplementationCard from '../components/Implementation/Implementation'

const Plans = ({price}) => {

    return (
        <div className='pricingAndImplmentation'>
        <div></div>
            <div className="card">

               {price < 51 && <Solo price={price}/> }
               {(price > 51 && price < 600) && <Pro price={price}/> }
               {price > 599 && <Custom price={price}/> }
            </div>
            <div className="implmentationCard">
            <ImplementationCard  price={price} />
            </div>
            <div></div>

        </div>
    )
}

export default Plans
