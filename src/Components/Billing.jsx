import React, { useState, useRef, useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'
import BillingRow from './BillingRow'


const Billing = () => {
    const trigger = useContext(DataContext).trigger
    const products = useContext(DataContext).products
    const [style, setStyle] = useState({ 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px', 'position': 'relative', 'display': 'none' })
    const spawnRowHere = useRef()
    const [count, setCount] = useState(1)
    const [productRow, addMoreProducts] = useState([<BillingRow products={products} count={count} setCount={setCount} close={close} />])

    useEffect(() => {
        if (trigger.orderBook)
            setStyle({ ...style, 'display': 'block' })
        else
            setStyle({ ...style, 'display': 'none' })


    }, [trigger.orderBook])

    function close(rowIndex) {
        const tempProductRow = productRow.filter((row,index)=> index !==rowIndex)
        addMoreProducts(tempProductRow)
    }

    return (
        <div className='container' style={style}>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th style={{ 'width': '100px', 'textAlign': 'center' }} scope="col">Serial No.</th>
                        <th style={{ 'width': '240px', 'textAlign': 'center' }} scope="col">Name of product</th>
                        <th style={{ 'width': '150px', 'textAlign': 'center' }} scope="col">HSN</th>
                        <th style={{ 'width': '150px', 'textAlign': 'center' }} scope="col">Quantity</th>
                        <th style={{ 'width': '150px', 'textAlign': 'center' }} scope="col">Price</th>
                        <th style={{ 'width': '140px', 'textAlign': 'center' }} scope="col">Taxable Value</th>
                        <th style={{ 'width': '140px', 'textAlign': 'center' }} scope="col">Tax</th>
                        <th style={{ 'width': '140px', 'textAlign': 'center' }} scope="col">Total</th>
                    </tr>
                </thead>
                <tbody ref={spawnRowHere}>

                    {productRow.map(item => item)}
                    {/* <BillingRow products={products}/> */}

                </tbody>
            </table>
            <button className='btn btn-outline-success' onClick={() => addMoreProducts([...productRow, <BillingRow products={products} count={count} setCount={setCount} close={close} />])}>Add More</button>
        </div>
    )
}

export default Billing