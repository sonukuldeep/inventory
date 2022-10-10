import React from 'react'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'
import CustomerList from './CustomerList'

const Customers = () => {
    const trigger = useContext(DataContext).trigger
    const customerData = useContext(DataContext).customerData
    const setCustomerData = useContext(DataContext).setCustomerData
    const [style, setStyle] = useState({ 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px' })
    const sortedCustomerData = [...customerData].sort(function (a, b) { return a.due < b.due })
    const [customerIndex, setCustomerIndex] = useState({'id': 1 , 'display': 'none'})

    useEffect(() => {
        let display;
        if (trigger.customers === true)
            display = 'block'
        else
            display = 'none'
        setStyle({ ...style, 'display': display })
        // console.log(trigger,style)

    }, [trigger.customers])

    function editCustomerEntry(e) {
        e.preventDefault();
        
    }

    function closeCustomerForm(){
        setCustomerIndex({...customerIndex,'display': 'none'})
    }

    return (

        <div className='container' style={style}>
            <form action="#" style={{'display':customerIndex['display']}} onSubmit={(e) => { editCustomerEntry(e) }}>
                <div className="row mb-3">
                    <label
                        htmlFor="colFormLabel"
                        className="col-sm-2 col-form-label col-form-label"
                    >
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            // inputMode="numeric"
                            className="form-control"
                            name="name"
                            id="colFormLabel"
                            value={customerData[customerIndex.id -1].name}
                            onChange={(e) => setCustomerData([...customerData,customerData[customerIndex.id -1].name = e.target.value])}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="colFormLabel"
                        className="col-sm-2 col-form-label col-form-label"
                    >
                        Pay
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="Number"
                            // inputMode="numeric"
                            className="form-control"
                            name="due"
                            id="colFormLabel"
                            value={customerData[customerIndex.id -1].due}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="colFormLabel"
                        className="col-sm-2 col-form-label col-form-label"
                    >
                        Phone
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            // inputMode="numeric"
                            className="form-control"
                            name="phone"
                            id="colFormLabel"
                            value={customerData[customerIndex.id -1].phone}
                        />
                    </div>
                </div>


                <button type="submit" className='btn btn-success'>Save</button>
                <button type="button" className='btn btn-warning mx-2' onClick={()=>{closeCustomerForm()}}>Cancel</button>
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Name</th>
                        <th scope="col">Due</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Last Purchase Date</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCustomerData.map((item, index) => {
                        return <CustomerList item={item} index={index} setCustomerIndex={setCustomerIndex} />

                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Customers