import React, {useState} from "react";
import DataContext from "./DataContext";


const DataState = (props) => {

    const navbarInitialState = { 'home': false, 'links': false, 'history': false, 'dashboard': false, 'products': false, 'critical': false, 'customers': false }
    const [btnTrigger, setBtnTrigger] = useState({ ...navbarInitialState, 'dashboard': true })
    const [products, setProducts] = useState(
        [{'id': 1,'number': 15, 'name':'baby oil','description': '50 ml bottle','sold': '5' },
        {'id': 2,'number': 18, 'name':'biscuits','description': '20 gm pkt','sold': '10' },
        {'id': 3,'number': 20, 'name':'rice','description': '25 kg bag','sold': '5' }])

        

    return (
        <DataContext.Provider value={{'initialState':navbarInitialState,'trigger':btnTrigger,'setTrigger':setBtnTrigger,products,setProducts}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState