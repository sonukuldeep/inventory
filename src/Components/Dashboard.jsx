import React from 'react'
import { useState, useEffect } from 'react'

const getDataFromDatabase = { 1: 100, 2: 200, 3: 20 }
const Dashboard = ({ trigger }) => {

    //css
    const [style, setStyle] = useState({ 'display': 'grid', 'gridTemplateColumns': '1fr 1fr 1fr', 'width': '87%', 'marginLeft': '180px', 'marginTop': '50px', 'gap': '10px' })

    useEffect(() => {
        let display;
        if (trigger.dashboard === true)
            display = 'grid'
        else
            display = 'none'
        setStyle({ ...style, 'display': display})
        // console.log(trigger,style)
    }, [trigger.dashboard])

    return (
        <>
            <div style={style}>
                <div className="card text-bg-success mb-3" >
                    <div className="card-header">Total sale</div>
                    <div className="container text-center">
                        <div className="card-body row">

                            <div className="col">
                                <h5 className="card-title">Last Month</h5>
                                <p className="card-text">{getDataFromDatabase[1]} items</p>

                            </div>
                            <div className="col">
                                <h5 className="card-title">This Month</h5>
                                <p className="card-text">{getDataFromDatabase[2]} items</p>

                            </div>
                            <div className="col">
                                <h5 className="card-title">Yesterday</h5>
                                <p className="card-text">{getDataFromDatabase[3]} items</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card text-bg-warning mb-3" >
                    <div className="card-header">Top Pending Payment</div>
                    <div className="card-body">
                        <h5 className="card-title">Warning card title</h5>
                        <ul>
                            <li className="card-text">1</li>
                            <li className="card-text">2</li>
                            <li className="card-text">3</li>
                            <li className="card-text">4</li>
                            <li className="card-text">5</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-bg-danger mb-3" >
                    <div className="card-header">Inventory shortage</div>
                    <div className="card-body">
                        <h5 className="card-title">Warning card title</h5>
                        <ul>
                            <li className="card-text">1</li>
                            <li className="card-text">2</li>
                            <li className="card-text">3</li>
                            <li className="card-text">4</li>
                            <li className="card-text">5</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container" style={{ 'marginLeft': '180px','display': style.display }}>
                <h3>Last few sales</h3>

                <table className="table" style={{ 'color': '#fff', 'backgroundColor': '#37474f' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Item</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>255</td>
                            <td>baby food</td>
                            <td>25/May</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>120</td>
                            <td>Thor</td>
                            <td>16/May</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>150</td>
                            <td>biscutes</td>
                            <td>15/May</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard