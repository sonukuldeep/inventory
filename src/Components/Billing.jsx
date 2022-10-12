import React, { useState, useRef, useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'
import BillingRow from './BillingRow'


const Billing = () => {
    const trigger = useContext(DataContext).trigger
    const products = useContext(DataContext).products
    const [style, setStyle] = useState({ 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px', 'position': 'relative', 'display': 'none' })
    const spawnRowHere = useRef()

    useEffect(() => {
        if (trigger.orderBook)
            setStyle({ ...style, 'display': 'block' })
        else
            setStyle({ ...style, 'display': 'none' })


    }, [trigger.orderBook])

    function addMoreProducts()
    {
        const createFormNode = document.createElement("BillingRow")
        // createFormNode.innerHTML = "<BillingRow products={products}/>"
        const parent = spawnRowHere.current
        parent.append(createFormNode)
    }

    return (
        <div className='container' style={style}>
            <table className='table'>
                <thead>
                    <tr>
                        <th style={{ 'width': '100px', 'text-align': 'center' }} scope="col">Serial No.</th>
                        <th style={{ 'width': '240px', 'text-align': 'center' }} scope="col">Name of product</th>
                        <th style={{ 'width': '150px', 'text-align': 'center' }} scope="col">HSN</th>
                        <th style={{ 'width': '150px', 'text-align': 'center' }} scope="col">Quantity</th>
                        <th style={{ 'width': '150px', 'text-align': 'center' }} scope="col">Price</th>
                        <th style={{ 'width': '140px', 'text-align': 'center' }} scope="col">Taxable Value</th>
                        <th style={{ 'width': '140px', 'text-align': 'center' }} scope="col">Tax</th>
                        <th style={{ 'width': '140px', 'text-align': 'center' }} scope="col">Total</th>
                    </tr>
                </thead>
                <tbody ref={spawnRowHere}>
                    
                    <BillingRow products={products}/>
                    
 
                </tbody>
            </table>
            <button onClick={()=>addMoreProducts()}>Add More</button>
        </div>
    )
}

export default Billing