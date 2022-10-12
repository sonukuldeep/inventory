import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


const DisplayList = ({ item, index,edit }) => {
    
    return (
        <>
            <tr key={index}>
                <th key={index+1} scope="row">{item.id}</th>
                <td key={index+2}>{item.number}</td>
                <td key={index+3}>{item.name}</td>
                <td key={index+4}>{item.description}</td>
                <td key={index+5}>{item.sold}</td>
                <td key={index+6} style={{'cursor':'pointer'}}><FontAwesomeIcon icon={faArrowUpRightFromSquare} onClick={()=>{edit(item.id)}}/></td>
            </tr>
        </>
    )
}

export default DisplayList