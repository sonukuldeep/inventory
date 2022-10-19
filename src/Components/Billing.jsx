import React, { useState, useRef, useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'
import BillingRow from './BillingRow'

const Billing = () => {

    const { products } = useContext(DataContext)
    const style = { 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px', 'position': 'relative' }
    const spawnRowHere = useRef()
    const [count, setCount] = useState(0)
    const [productRow, addMoreProducts] = useState([])
    const refgtotal = useRef()

    const getTotal = () => {
        const grandTotal = document.querySelectorAll('.gtotal')
        let gtotal = 0
        grandTotal.forEach(item => { gtotal += parseFloat(item.innerText) })
        refgtotal.current.innerText = "Grand total:- " + gtotal.toFixed(2) + "/-"

    }

    function close(rowIndex) {
        const removeRow = document.getElementById(rowIndex)
        removeRow.remove()
        setCount(count + 1)

    }

    function addRow() {
        addMoreProducts([...productRow, <BillingRow products={products} close={close} id={count} getTotal={getTotal} />])
        setCount(count + 1)
    }

    useEffect(() => {
        const trackCount = document.querySelectorAll('.trackCount')
        trackCount.forEach((item, index) => { item.innerText = index + 1 })
    }, [count])


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

                    {productRow.map((item) => item)}

                </tbody>
            </table>
            <button className='btn btn-outline-success' onClick={() => addRow()}>Add Product</button>
            <div style={{ position: "absolute", right: "100px", fontSize: "1.2rem", fontWeight: "bolder" }} ref={refgtotal}></div>
        </div>
    )
}

export default Billing