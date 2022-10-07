import React from 'react'

const DisplayList = ({item, index}) => {
    // console.log(item)
    return (
        <>
            <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.number}</td>
                <td>{item.name}</td>
                <td>{item.currentStock}</td>
                <td>{item.sold}</td>
            </tr>
        </>
    )
}

export default DisplayList