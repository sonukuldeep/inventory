import React,{useState,useRef} from 'react'

const BillingRow = ({products}) => {
    const [total, setTotal] = useState({ 'taxableAmount': "", 'tax': "", "rate": "", 'total': "" })
    const refProductHsn = useRef()
    const refProductQuantity = useRef()
    const refProductPrice = useRef()
    const refProductTaxableVal = useRef()
    const refProductTax = useRef()
    const refProductTotal = useRef()

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
        const total = taxableAmount + tax
        return { 'taxableAmount': taxableAmount, 'tax': tax, 'total': total, 'rate': `(${rate})%` }
    }

    return (
        <tr>
            <td style={{ 'text-align': 'center' }}>1</td>
            <td style={{ 'width': '240px' }}>
                <select name="name" style={{ 'width': '100%' }} onChange={(e) => { ProductLookup(e,) }}>

                    {products.map((product, index) => { return <option key={index} value={product.name}>{product.name}</option> })}
                </select>
            </td>
            <td ><input style={{ 'width': '150px' }} ref={refProductHsn} type="number" /></td>
            <td ><input style={{ 'width': '150px' }} ref={refProductQuantity} defaultValue="1" min="1" onChange={(e) => { ProductLookup(e, 'quantity Update') }} type="number" /></td>
            <td ><input style={{ 'width': '150px' }} ref={refProductPrice} min="1" onChange={(e) => { ProductLookup(e, 'price Update') }} type="number" /></td>
            <td style={{ 'text-align': 'center' }} ref={refProductTaxableVal}>{total.taxableAmount}</td>
            <td style={{ 'text-align': 'center' }} ref={refProductTax} >{total.tax} {total.rate}</td>
            <td style={{ 'text-align': 'center' }} ref={refProductTotal} >{total.total}</td>
        </tr>
    )
}

export default BillingRow