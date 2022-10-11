import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'





const CustomerList = ({ item, index, setCurrentIndex, setTempOnChangeContainer,tempOnChangeContainer }) => {
    
    function setListValues(){
     setCurrentIndex({'id':item.id,'display':'block'})
        setTempOnChangeContainer({'name':item.name,'due':item.due,'phone':item.phone})
        // setTempOnChangeContainer({...tempOnChangeContainer})
        // setTempOnChangeContainer({...tempOnChangeContainer})?
    }

    return (
        <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.due}</td>
            <td>{item.phone}</td>
            <td>{item.lastPurchaseDate}</td>
            <td onClick={()=>{setListValues()}} style={{'cursor':'pointer'}}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></td>
        </tr>
    )
}

export default CustomerList