
import {useState, useEffect} from 'react';

const ImplementationCard = ({price}) => {


    const [implementationFee, setImplementationFee] = useState(1000)




    useEffect(()=>{
        if(price>600){
            setImplementationFee(0)

        }else {
            setImplementationFee(1000)
        }

    },[price])


    return(
        <div className="cardDetails">

            <h3 className="planName">Implementation Team</h3>
            <h3 className="costOfPry">Cost: ${implementationFee}</h3>
            <h6>Team builds out new or existing model</h6>



            <div>
            { price < 600 &&
            <div className='features'>
            <p>Revenue Models & Forecasting</p>
                <p>Expense Budgets</p>
                <p>Hiring Plan</p>
                <p>1 Custom Dashboard</p>
                <p>1 Revision</p>

            </div>
            }


            { price > 599 &&
               < div className='features'>
            <p>Revenue Models & Forecasting</p>
                <p>Expense Budgets</p>
                <p>Hiring Plan</p>
                <p>Multiple Dashboards</p>
                <p>Ongoing model adjustments</p>
                <p>Multiple Scenarios</p>

            </div>
            }
            </div>


        </div>
    )
}


export default ImplementationCard
