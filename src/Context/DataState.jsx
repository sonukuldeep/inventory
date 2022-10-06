import React, {useState} from "react";
import DataContext from "./DataContext";


const DataState = (props) => {

    const navbarInitialState = { 'home': false, 'links': false, 'history': false, 'dashboard': false, 'products': false, 'critical': false, 'customers': false }
    const [btnTrigger, setBtnTrigger] = useState({ ...navbarInitialState, 'dashboard': true })
    const [products, setProducts] = useState(
        [{'id': 1, 'name':'baby oil','currentStock': '25','sold': '5' },
        {'id': 2, 'name':'biscuits','currentStock': '30','sold': '10' },
        {'id': 3, 'name':'rice','currentStock': '25 bags','sold': '5 bags' }])

    return (
        <DataContext.Provider value={{'initialState':navbarInitialState,'trigger':btnTrigger,'setTrigger':setBtnTrigger,products,setProducts}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState