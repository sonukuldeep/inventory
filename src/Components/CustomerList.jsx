import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const CustomerList = ({ item, index, setCustomerIndex }) => {
    // console.log(item)
    return (
        <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.due}</td>
            <td>{item.phone}</td>
            <td>{item.lastPurchaseDate}</td>
            <td style={{'cursor':'pointer'}}><FontAwesomeIcon icon={faArrowUpRightFromSquare} onClick={()=>{setCustomerIndex({'id':item.id,'display':'block'})}}/></td>
        </tr>
    )
}

export default CustomerList