import React, { useState, useContext } from 'react'
import DataContext from '../Context/DataContext'
import DisplayList from './DisplayList'
import icon from '../Assets/Image/icon.gif'

const Products = () => {
    // const data = 
    const {products, setProducts} = useContext(DataContext)
    // const setProducts = data.setProducts
    const style = { 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px' }
    const [enableForm, setEnableDisable] = useState(false)
    const [editId, setEditId] = useState({ 'id': 0, 'display': 'none' })
    

    function checkDuplicateEntry(entry) {
        let indexNegativeIfNoDuplicateFound = -1
        products.forEach((item, index) => {
            if (indexNegativeIfNoDuplicateFound !== -1) return
            if (Object.values(item).includes(Number(entry.id)) || Object.values(item).includes(entry.name)) {
                indexNegativeIfNoDuplicateFound = index
            }
        })
        return indexNegativeIfNoDuplicateFound
    }

    function addProductsToStock(entry) {
        const index = checkDuplicateEntry(entry)
        let product
        if (index !== -1) {
            product = products[index]
            product.number = Number(product.number) + Number(entry.number)
            const updatedProductlist = [...products]
            updatedProductlist[index] = product
            setProducts(updatedProductlist)

        }
        else
            setProducts([...products, entry])
    }

    function formSubmit(e, action = 'add') {
        e.preventDefault()
        if (action === 'add') {
            let id = e.target.elements.id.value
            let quantity = e.target.elements.quantity.value
            let product_name = e.target.elements.product_name.value
            let des = e.target.elements.description.value
            let newEntry = { 'id': id, 'number': quantity, 'name': product_name, 'description': des, 'sold': 0 }

            addProductsToStock(newEntry)
            for (let i = 0; i < 4; i++) {
                e.target[i].value = ""
            }
        } else {
            let id = products[editId.id].id
            let quantity = e.target.elements.quantity.value
            let product_name = e.target.elements.product_name.value
            let des = e.target.elements.description.value
            let sold = e.target.elements.sold.value
            let product = { 'id': id, 'number': quantity, 'name': product_name, 'description': des, 'sold': sold }
            const updatedProductlist = [...products]
            updatedProductlist[editId.id] = product
            setProducts(updatedProductlist)
            closeEditBox()
        }

    }

    function editPopup(id) {
        setEditId({ 'id': Number(id) - 1, 'display': 'block' }) //since products in an array therefore using id -1
    }

    function closeEditBox() {
        let img = document.createElement('img')
        img.src = icon
        img.setAttribute('style', 'width: 100px; position: absolute; top: 50%; left: 40%; transform: translate(-50%,-50%)')
        img.setAttribute('class', 'checkmark')
        document.getElementById('edit-form').appendChild(img)
        setTimeout(() => {
            setEditId({ 'id': 0, 'display': 'none' })
            document.getElementById('edit-form').removeChild(document.querySelector('.checkmark'))

        }, 2000);
    }

    return (
        <div className='container' style={style}>

            <button type='button' style={(editId['display'] === 'block') ? {'display': 'none'} : {'display': 'block'} } className='btn btn-warning' onClick={() => { setEnableDisable(!enableForm); }}>{enableForm ? 'Close' : 'Add more products'}</button>
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
                        Product Name
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
                        Description
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="colFormLabel"
                            placeholder="Enter number of stocks being added"
                        />
                    </div>
                </div>
                <button type='submit' className='btn btn-success my-2' >Submit</button>


            </form>

            {/* edit product */}
            <form action="#" id="edit-form" style={{ 'display': editId.display, position: 'relative' }} onSubmit={(e) => { formSubmit(e, 'edit') }}>
                {/* <img src={icon} alt="" /> */}
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
                            value={products[editId.id].id}
                            readOnly
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
                            defaultValue={products[editId.id].number}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                        Product Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="product_name"
                            id="colFormLabel"
                            defaultValue={products[editId.id].name}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="colFormLabel"
                        className="col-sm-2 col-form-label col-form-label"
                    >
                        Description
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="colFormLabel"
                            defaultValue={products[editId.id].description}
                        />
                    </div>
                </div>
                <div className="row">
                    <label
                        htmlFor="colFormLabel"
                        className="col-sm-2 col-form-label col-form-label"
                    >
                        Sold
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="sold"
                            id="colFormLabel"
                            defaultValue={products[editId.id].sold}
                        />
                    </div>
                </div>
                <button type='submit' className='btn btn-success my-2' >Save</button>
                <button type='button' className='btn btn-warning my-2 mx-2' onClick={() => { setEditId({ 'id': 0,'display': 'none' }) }}>Cancel{ }</button>

            </form>


            <table className="table table-striped" style={{ marginTop: '10px', borderTop: '1px solid rgba(0,0,0,0.5)' }}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Quantiy</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Sold</th>
                        <th scope="col" className="px-0">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => { return <DisplayList key={index} item={item} index={index} edit={editPopup} /> })}

                </tbody>
            </table>
        </div>
    )
}

export default Products