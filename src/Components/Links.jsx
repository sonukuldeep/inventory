import React from 'react'

const Links = () => {
const style = { 'width': '87%', 'marginLeft': '180px', 'marginTop': '30px','position': 'relative' }

  return (
    <div className="container" style={style}>
        <h3>Useful links to lookup</h3>
        <ul>
            <li><a href="https://cleartax.in/s/gst-hsn-lookup/#" target="_blank" rel="noopener noreferrer">Lookup HSN number from clear tax</a></li>
        </ul>
    </div>
  )
}

export default Links