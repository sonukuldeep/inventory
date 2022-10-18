import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'

const Sales = () => {
    const { products } = useContext(DataContext)
    const style = { 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px' }
    const price = ["50.00", "30.00", "120.00"]
    const randomNumber = (Math.floor(Math.random() * 5) + 1) * 10
    return (
        <>
            <div className="container" style={style}>
                <h3>Total sales this month</h3>
                <table className="table table-striped" style={{ borderTop: '1px solid rgba(0,0,0,0.5)' }}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => { return (<><tr key={index}><td>{product.id}</td><td>{product.name}</td><td>{product.description}</td><td>{(randomNumber * price[index]).toFixed(2)}</td></tr></>) })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Sales