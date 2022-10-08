import React, { useState, useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'
import DisplayList from './DisplayList'

const Products = () => {
    const data = useContext(DataContext)
    const trigger = data.trigger
    const products = data.products
    const setProducts = data.setProducts
    const [style, setStyle] = useState({ 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px' })
    const [enableForm, setEnableDisable] = useState(false)

    useEffect(() => {
        let display;
        if (trigger.products === true)
            display = 'block'
        else
            display = 'none'
        setStyle({ ...style, 'display': display })
    }, [trigger.products])

    function checkDuplicateEntry(entry) {
        let indexNegativeIfNoDuplicateFound = -1
        products.forEach((item,index) => {
            if(indexNegativeIfNoDuplicateFound !== -1) return
            if(Object.values(item).includes(Number(entry.id)) || Object.values(item).includes(entry.name)){
                indexNegativeIfNoDuplicateFound = index
            }
            
        })
        return indexNegativeIfNoDuplicateFound
    }

    function addProductsToStock(entry){
        const index = checkDuplicateEntry(entry)
        let product
        if(index !== -1){
            product = products[index]
            product.number = Number(product.number) + Number(entry.number)
            const updatedProductlist = [...products]
            updatedProductlist[index] = product
          setProducts(updatedProductlist)

        }
        else
        setProducts([...products,entry])
    }

    function formSubmit(e) {
        e.preventDefault()
        let id = e.target.elements.id.value
        let quantity = e.target.elements.quantity.value
        let product_name = e.target.elements.product_name.value
        let available_stock = e.target.elements.available_stock.value
        let newEntry = { 'id': id, 'number': quantity, 'name': product_name, 'currentStock': available_stock, 'sold': 0 }

        addProductsToStock(newEntry)
        for (let i = 0; i < 4; i++){
            e.target[i].value = ""
        }
    }

    return (
        <div className='container' style={style}>

            <button type='button' className='btn btn-warning' onClick={() => { setEnableDisable(!enableForm); }}>{enableForm ? 'Close' : 'Add more products'}</button>
            <form action="#" id="product-form" style={enableForm ? { 'display': 'block' } : { 'display': 'none' }} onSubmit={(e) => { formSubmit(e) }}>
                <div className="row mb-3">
                    <label
                        htmlFor="colFormLabel"
                        className="col-sm-2 col-form-label col-form-label"
                    >
                        ID
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            // inputMode="numeric"
                            className="form-control"
                            name="id"
                            id="colFormLabel"
                            placeholder="Enter product ID"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="colFormLabel"
                        className="col-sm-2 col-form-label col-form-label"
                    >
                        Quantity
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            name="quantity"
                            id="colFormLabel"
                            placeholder="Enter Quantity"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                        Product name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="product_name"
                            id="colFormLabel"
                            placeholder="Enter product name"
                        />
                    </div>
                </div>
                <div className="row">
                    <label
                        htmlFor="colFormLabel"
                        className="col-sm-2 col-form-label col-form-label"
                    >
                        Stock
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="available_stock"
                            id="colFormLabel"
                            placeholder="Enter number of stocks being added"
                        />
                    </div>
                </div>
                <input type='submit' className='btn btn-success' />
                {/* <button type='button' className='btn btn-success' onClick={(e) => { formSubmit(e) }}>Submit</button> */}

            </form>


            <table class="table table-striped" style={{ marginTop: '10px', borderTop: '1px solid rgba(0,0,0,0.5)' }}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Quantiy</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Current Stock</th>
                        <th scope="col">Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => { return <DisplayList item={item} index={index} /> })}

                </tbody>
            </table>
        </div>
    )
}

export default Products