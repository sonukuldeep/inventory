import React, { useState, useEffect,useContext } from 'react'
import DataContext from '../Context/DataContext'

const Products = () => {
    const trigger = useContext(DataContext).trigger
    const products = useContext(DataContext).products
    
    const [style, setStyle] = useState({ 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px' })
    

    useEffect(() => {
        let display;
        if (trigger.products === true)
            display = 'block'
        else
            display = 'none'
        setStyle({ ...style, 'display': display })
    }, [trigger.products])

    return (
        <div className='container' style={style}>

            <form action="#" method="post">
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
                            id="colFormLabel"
                            placeholder="Enter product ID"
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
                            id="colFormLabel"
                            placeholder="Enter number of stocks being added"
                        />
                    </div>
                </div>
            </form>


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Current Stock</th>
                        <th scope="col">Sold</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Baby oil</td>
                        <td>25</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Buiscuts</td>
                        <td>30</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Rice</td>
                        <td>25 bags</td>
                        <td>5 bags</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Products