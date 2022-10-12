import React from 'react'
import { useState, useEffect,useContext } from 'react'
import DataContext from '../Context/DataContext'

const Critical = () => {
    const trigger = useContext(DataContext).trigger

    const [style, setStyle] = useState({ 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px' })

    useEffect(() => {
        let display;
        if (trigger.critical === true)
            display = 'block'
        else
            display = 'none'
        setStyle({ ...style, 'display': display })
        // console.log(trigger,style)
    }, [trigger.critical])

    return (
        <div className='container' style={style}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Due Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Critical