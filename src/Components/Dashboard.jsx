import React from 'react'
import { useContext } from 'react'
import DataContext from '../Context/DataContext'


const Dashboard = () => {
    const {customerData, products, sales, history} = useContext(DataContext)
        
    const style = { 'display': 'grid', 'gridTemplateColumns': '1fr 1fr 1fr', 'width': '87%', 'marginLeft': '180px', 'marginTop': '50px', 'gap': '10px' }
    

    return (
        <>
            <div style={style}>
                <div className="card text-bg-success mb-3" >
                    <div className="card-header">Total sale</div>
                    <div className="container text-center">
                        <div className="card-body row">

                            <div className="col">
                                <h5 className="card-title">Last Month</h5>
                                <p className="card-text">{sales.lastMonth.noOfItems} items Worth {sales.lastMonth.worth}/-</p>

                            </div>
                            <div className="col">
                                <h5 className="card-title">This Month</h5>
                                <p className="card-text">{sales.thisMonth.noOfItems} items Worth {sales.thisMonth.worth}/-</p>

                            </div>
                            <div className="col">
                                <h5 className="card-title">Yesterday</h5>
                                <p className="card-text">{sales.today.noOfItems} items Worth {sales.today.worth}/-</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card text-bg-warning mb-3" >
                    <div className="card-header">Top Pending Payment</div>
                    <div className="card-body">
                        <h5 className="card-title">Warning card title</h5>
                        <ul>
                            {customerData.map((customer,index)=>{return (<li key={index} className="card-text">{customer.name} has {customer.due}</li>)})}
                     
                        </ul>
                    </div>
                </div>
                <div className="card text-bg-danger mb-3" >
                    <div className="card-header">Inventory shortage</div>
                    <div className="card-body">
                        <h5 className="card-title">Warning card title</h5>
                        <ul>
                            {products.map((product,index)=>{return (<li key={index} className="card-text">{product.name}:- {product.number}</li>)})}
                  
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container" style={{ 'marginLeft': '180px' }}>
                <h3>Last few sales</h3>

                <table className="table" style={{ 'color': '#fff', 'backgroundColor': '#37474f' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Item</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item,index)=>{ return (<tr key={index}><td>{index+1}</td><td>{item.id}</td><td>{item.item}</td><td>{item.date}</td></tr>)})}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard