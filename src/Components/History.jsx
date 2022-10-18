import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'

const History = () => {
    const { products } = useContext(DataContext)
    const style = { 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px','position': 'relative' }
    const sortedProductList = products.sort((a,b)=>{return (new Date(a.lastSold) > new Date(b.lastSold))})

  return (
    <div style={style}>
        <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Item</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProductList.map((item,index)=>{
                        return (<tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.number}</td>
                            <td>{item.lastSold}</td>
                        </tr>)
                    })}

                </tbody>
            </table>
    </div>
  )
}

export default History