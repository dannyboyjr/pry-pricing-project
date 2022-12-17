
import { useState, useEffect } from 'react'
import Plans from '../../plans/Plans.js'
import './slider.css'

const Slider = () => {


    const [expenses, setExpenses] = useState(75000);
    const [price, setPrice] = useState(0)

    var nf = new Intl.NumberFormat();

    useEffect(() => {
        const costOfPry = expenses * .001
        if (expenses < 74999) {
            setPrice(50)
        } else if (expenses < 200000 && expenses > 74999) {
            setPrice(200)
        }

        else {
            setPrice(costOfPry)
        }


    }, [expenses])


    return (
        <div className="pricing">
            <h1>Pricing</h1>

            <div className='expenses'>
            <h3 className="monthlyExpenses"> Monthly Expenses  ${nf.format(expenses)}</h3>
                <div className='sliderThing'>
                    <input className='slider' type="range" min="0" max="1500000" step="1000" value={expenses} onChange={e => setExpenses(e.target.value)} />

                </div>

            </div>

            < Plans price={price}  />
        </div>
    );
}

export default Slider
