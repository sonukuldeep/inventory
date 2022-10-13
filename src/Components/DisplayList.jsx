import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


const DisplayList = ({ item, index,edit }) => {
    
    return (
        <>
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.number}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.sold}</td>
                <td style={{'cursor':'pointer'}}><FontAwesomeIcon icon={faArrowUpRightFromSquare} onClick={()=>{edit(item.id)}}/></td>
            </tr>
        </>
    )
}

export default DisplayList