import React, { useState, useRef, useEffect } from 'react'


const BillingRow = ({ products, close, id, getTotal }) => {
    const [total, setTotal] = useState({ 'taxableAmount': "", 'tax': "", "rate": "", 'total': "" })
    const refProductHsn = useRef()
    const refProductQuantity = useRef()
    const refProductPrice = useRef()
    const refProductTaxableVal = useRef()
    const refProductTax = useRef()
    
    

    function ProductLookup(e, operation = 'default') {
        if (operation !== 'default') {
            const rate = total.rate.substring(1, total.rate.indexOf(')'))
            setTotal(CalculateOrder(refProductQuantity.current.value, refProductPrice.current.value, rate))
        } else {
            const productName = e.target.value
            const productIndex = products.findIndex(product => product.name === productName)
            refProductHsn.current.value = products[productIndex].hsn
            refProductPrice.current.value = products[productIndex].price
            setTotal(CalculateOrder(refProductQuantity.current.value, refProductPrice.current.value, products[productIndex].rate))
        }

       
    }

    function CalculateOrder(quantity, price, rate) {
        const taxableAmount = quantity * price
        const tax = (taxableAmount * rate * 0.01).toFixed(2) //rate is in % terms
        const total = (taxableAmount + parseFloat(tax)).toFixed(2)
        return { 'taxableAmount': taxableAmount, 'tax': tax, 'total': total, 'rate': `(${rate})%` }
    }

    function closeEvent(e){
        // close(e.target.id)
        close(`row-${e.target.id}`)
    }

    useEffect(()=>{if(total.total) getTotal()},[getTotal,total])

    return (
        <>
            <tr id={`row-${id}`}>
                <td className='trackCount' style={{ 'textAlign': 'center' }}></td>
                <td style={{ 'width': '240px' }}>
                    <select name="name" style={{ 'width': '100%' }} onChange={(e) => { ProductLookup(e,) }}>

                        {products.map((product, index) => { return <option key={index} value={product.name}>{product.name}</option> })}
                    </select>
                </td>
                <td ><input style={{ 'width': '150px' }} ref={refProductHsn} type="number" /></td>
                <td ><input style={{ 'width': '150px' }} ref={refProductQuantity} defaultValue="1" min="1" onChange={(e) => { ProductLookup(e, 'quantity Update') }} type="number" /></td>
                <td ><input style={{ 'width': '150px' }} ref={refProductPrice} min="1" onChange={(e) => { ProductLookup(e, 'price Update') }} type="number" /></td>
                <td style={{ 'textAlign': 'center' }} ref={refProductTaxableVal}>{total.taxableAmount}</td>
                <td style={{ 'textAlign': 'center' }} ref={refProductTax} >{total.tax} {total.rate}</td>
                <td className='gtotal' style={{ 'textAlign': 'center' }}  >{total.total}</td>
                <button id={id} onClick={(e)=>{closeEvent(e)}}>&times;</button>
            </tr>
        </>
    )
}

export default BillingRow