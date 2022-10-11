import React, { useState, useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'

const Billing = () => {
    const trigger = useContext(DataContext).trigger
    const [style, setStyle] = useState({ 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px', 'position': 'relative', 'display': 'none' })


    useEffect(() => {
        if (trigger.orderBook)
            setStyle({ ...style, 'display': 'block' })
        else
            setStyle({ ...style, 'display': 'none' })

        
    }, [trigger.orderBook])

    return (
        <div className='container' style={style}>
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">Serial No.</th>
                        <th scope="col">Name of product</th>
                        <th scope="col">HSN</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Taxable Value</th>
                        <th scope="col">Tax %</th>
                        <th scope="col">Tax</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><input style={{'width': '150px'}} type="text" /></td>
                        <td><input style={{'width': '100px'}} type="number" /></td>
                        <td><input style={{'width': '100px'}} type="number" /></td>
                        <td><input style={{'width': '100px'}} type="number" /></td>
                        <td>400</td>
                        <td>10</td>
                        <td>40</td>
                        <td>440</td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Billing