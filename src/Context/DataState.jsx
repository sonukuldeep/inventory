import React, { useState } from "react";
import DataContext from "./DataContext";


const DataState = (props) => {

    const navbarInitialState = { 'home': false, 'links': false, 'history': false, 'dashboard': false, 'orderBook': true, 'products': true, 'critical': true, 'customers': true }
    const [btnTrigger, setBtnTrigger] = useState({ ...navbarInitialState, 'dashboard': true })
    const [products, setProducts] = useState(
        [{ 'id': 1, 'number': 15, 'name': 'baby oil', 'hsn': 1504, 'price': '50','rate':5, 'description': '50 ml bottle', 'sold': '5' },
        { 'id': 2, 'number': 18, 'name': 'biscuits', 'hsn': 19059040,'price': '20','rate': 18,'description': '20 gm pkt', 'sold': '10' },
        { 'id': 3, 'number': 20, 'name': 'rice', 'hsn': 1006,'price': '120','rate': 5, 'description': '25 kg bag', 'sold': '5' }])

    const [customerData, setCustomerData] = useState(
        [{ 'id': 1, 'name': 'Nehru', 'due': 2500.00, 'phone': 'xxxx', 'lastPurchaseDate': '25/08/22' },
        { 'id': 2, 'name': 'Kalam', 'due': 500.00, 'phone': 'xxxx', 'lastPurchaseDate': '30/08/22' },
        { 'id': 3, 'name': 'Gandhi', 'due': 3500.00, 'phone': 'xxxx', 'lastPurchaseDate': '20/08/22' },
        { 'id': 4, 'name': 'Indra', 'due': 2000.00, 'phone': 'xxxx', 'lastPurchaseDate': '31/08/22' },
        { 'id': 5, 'name': 'Murmu', 'due': 520.00, 'phone': 'xxxx', 'lastPurchaseDate': '23/08/22' }
        ])



    return (
        <DataContext.Provider value={{ 'initialState': navbarInitialState, 'trigger': btnTrigger, 'setTrigger': setBtnTrigger, products, setProducts, customerData, setCustomerData }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState