import React from 'react'

const Critical = () => {

    const style = { 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px' }

    return (
        <div className='container' style={style}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
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