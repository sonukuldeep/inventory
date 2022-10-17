import React, {useContext} from 'react'
import DataContext from '../Context/DataContext'

const Critical = () => {
    const {products} = useContext(DataContext)
    const style = { 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px' }
    const sortedProductsViaQuantity = [...products].sort((a,b)=> {return a.quantity > b.quantity})
    const sortedProductsViaLastSold = [...products].sort((a,b)=> {return new Date(a.lastSold) > new Date(b.lastSold)})
    
    return (
        <>
        <h4 style={{...style, 'text-decoration': 'underline'}}>Products that are low in Inventory</h4>
        <div className='container' style={style}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {/* <th scope="col">Serial</th> */}
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                  {sortedProductsViaQuantity.map((product)=>{return  (<tr><td>{product.id}</td><td>{product.name}</td><td>{product.number}</td></tr>)})}  
                    
                </tbody>
            </table>
        </div>
        <h4 style={{...style, 'text-decoration': 'underline'}}>Products that have low sell rate</h4>
        <div className='container' style={style}>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Sold</th>
                </tr>
            </thead>
            <tbody>
            {sortedProductsViaLastSold.map((product)=>{return  (<tr><td>{product.id}</td><td>{product.name}</td><td>{product.lastSold}</td></tr>)})}
            </tbody>
        </table>
    </div>
    </>
    )
}

export default Critical