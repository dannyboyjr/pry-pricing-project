import './pro.css'

const Pro = ({ price }) => {
    var nf = new Intl.NumberFormat();
    let costOfPry = nf.format(price)

    return (
        <div className="cardDetails">

                    <h3 className="planName">Pro Plan</h3>
                    <h4 className="costOfPry">Cost of Pry: ${costOfPry}</h4>
                    <h6>$1 for every $1000 of expenses</h6>



            <div className='features'>
                <p>Admin Users: 5</p>
                <p>Hiring Plan: Unlimited</p>
                <p>Models Tab: Unlimited</p>
                <p>Dashboards: Unlimited</p>
                <p>Scenario Planning: Unlimited</p>

            </div>

        </div>
    )
}

export default Pro
