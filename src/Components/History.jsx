import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'

const History = () => {
    const history = useContext(DataContext).history
    const style = { 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px','position': 'relative' }

  return (
    <div style={style}>
        <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Item</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item,index)=>{
                        return (<tr>
                            <td>{item.id}</td>
                            <td>{index+1}</td>
                            <td>{item.item}</td>
                            <td>{item.date}</td>
                        </tr>)
                    })}

                </tbody>
            </table>
    </div>
  )
}

export default History