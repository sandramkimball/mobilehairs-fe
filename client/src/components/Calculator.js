import React, { useState } from 'react';

const PaymentCalculator = (props) => {
    const price = props.props
    const defaultDownpay = Math.round(price*.1)
    const [term, setTerm] = useState(24)
    const [downpay, setDownpay] = useState( defaultDownpay )
    const payment = Math.round((price-downpay)/term )

 
    return(
        <section className='calculator'>
            <div>
                <h2>Payment Calculator</h2>
                <p>Finance</p>
                <h2 className='monthly-payment'>${payment}/mnth</h2>
            </div>

            <div>
                <p>Price</p>
                <input 
                    label = 'Purchase Price'
                    name='purchasePrice'
                    placeholder={`$${price}`}
                />
                
                <p>Down Payment</p>
                <input 
                    label='Down Payment'
                    name='downpay'
                    value={downpay}
                    placeholder={`$${downpay}`}
                    onChange={e=>setDownpay(e.target.value)}
                />
                
                <p>Term</p>
                <select label='Term' name='term' value={term} onChange={e=>setTerm(e.target.value)}>
                    <option value={24}>24 months</option>
                    <option value={36}>36 months</option>
                    <option value={48}>48 months</option>
                    <option value={60}>60 months</option>
                    <option value={72}>72 months</option>
                </select>
            </div>
        </section>
    )
}

export default PaymentCalculator;