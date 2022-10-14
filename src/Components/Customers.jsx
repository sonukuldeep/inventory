import React from 'react'
import { useState, useContext,useRef } from 'react'
import DataContext from '../Context/DataContext'
import CustomerList from './CustomerList'
import icon from '../Assets/Image/icon.gif'

const Customers = () => {
    const trigger = useContext(DataContext).trigger
    const customerData = useContext(DataContext).customerData
    const setCustomerData = useContext(DataContext).setCustomerData
    const style = { 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px','position': 'relative' }
    const sortedCustomerData = [...customerData].sort(function (a, b) { return a.due < b.due })
    const [currentIndex, setCurrentIndex] = useState({'id': 1 , 'display': 'none'})
    const [tempOnChangeContainer, setTempOnChangeContainer] = useState({'name':'','due':'','phone': ''})
    const btnRef = useRef(null)


    function editCustomerEntry(e) {
        e.preventDefault();
        const tempCustomerData = [...customerData]
        tempCustomerData[currentIndex.id-1] = {...customerData[currentIndex.id-1],...tempOnChangeContainer}
        setCustomerData(tempCustomerData)
        btnRef.current.style = 'display: block; position:absolute; top: 50%; left: 40%; transform :translate(-50%,-50%)';
        setTimeout(() => {
            btnRef.current.style = 'display: none'
            closeCustomerForm()
        }, 2000);
    }

    function closeCustomerForm(){
        setCurrentIndex({...currentIndex,'display': 'none'})
    }

    return (

        <div className='container' style={{...style,'display': (trigger.customers) ? 'block' : 'none'}}>
            <img ref={btnRef} style={{'display': 'none','position':'absolute'}} src={icon} alt="" />
            <form action="#" style={{'display':currentIndex['display']}} onSubmit={(e) => { editCustomerEntry(e) }}>
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
                            value={tempOnChangeContainer.name}
                            onChange={(e) => setTempOnChangeContainer({...tempOnChangeContainer,'name':e.target.value})}
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
                            value={tempOnChangeContainer.due}
                            onChange={(e) => setTempOnChangeContainer({...tempOnChangeContainer,'due':e.target.value})}
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
                            // type="number"
                            // inputMode="numeric"
                            className="form-control"
                            name="phone"
                            id="colFormLabel"
                            value={tempOnChangeContainer.phone}
                            onChange={(e) => setTempOnChangeContainer({...tempOnChangeContainer,'phone':e.target.value})}
                        />
                    </div>
                </div>


                <button type="submit" className='btn btn-success'>Save</button>
                <button type="button" className='btn btn-warning mx-2' onClick={()=>{closeCustomerForm()}}>Cancel</button>
            </form>
            <table className="table table-striped">
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
                        return <CustomerList key={index} item={item} index={index} setCurrentIndex={setCurrentIndex} setTempOnChangeContainer={setTempOnChangeContainer}/>

                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Customers