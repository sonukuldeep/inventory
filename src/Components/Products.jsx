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

    function formSubmit(e) {
        e.preventDefault()
        console.log(e.target.elements.id.value)
        console.log(e.target.elements.quantity.value)
        console.log(e.target.elements.product_name.value)
        console.log(e.target.elements.available_stock.value)
    }

    return (
        <div className='container' style={style}>

            <button type='button' className='btn btn-warning' onClick={() => {setEnableDisable(!enableForm);}}>{enableForm ? 'Close' : 'Open'}</button>
            <form action="#" id="product-form" style={enableForm ? {'display': 'block'} : {'display': 'none'} }  onSubmit={(e) => { formSubmit(e) }}>
                <div className="row mb-3">
                    <label
                        htmlFor="colFormLabel"
                        className="col-sm-2 col-form-label col-form-label"
                    >
                        ID
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            inputMode="numeric"
                            className="form-control"
                            name="id"
                            id="colFormLabel"
                            placeholder="Enter product ID"
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
                            type="text"
                            inputMode="numeric"
                            className="form-control"
                            name="quantity"
                            id="colFormLabel"
                            placeholder="Enter Quantity"
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
                <input type='submit' className='btn btn-success'/>
                {/* <button type='button' className='btn btn-success' onClick={(e) => { formSubmit(e) }}>Submit</button> */}

            </form>


            <table class="table table-striped" style={{marginTop: '10px', borderTop: '1px solid rgba(0,0,0,0.5)'}}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Number</th>
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