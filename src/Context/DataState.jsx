import React, { useState } from "react";
import DataContext from "./DataContext";


const DataState = (props) => {

    const [display, setDisplay] = useState(false)
    const [products, setProducts] = useState(
        [{ 'id': 1, 'number': 15, 'name': 'baby oil', 'hsn': 1504, 'price': '50', 'rate': 5, 'description': '50 ml bottle', 'sold': '5' },
        { 'id': 2, 'number': 18, 'name': 'biscuits', 'hsn': 19059040, 'price': '20', 'rate': 18, 'description': '20 gm pkt', 'sold': '10' },
        { 'id': 3, 'number': 20, 'name': 'rice', 'hsn': 1006, 'price': '120', 'rate': 5, 'description': '25 kg bag', 'sold': '5' }])

    const [customerData, setCustomerData] = useState(
        [{ 'id': 1, 'name': 'Nehru', 'due': 2500.00, 'phone': 'xxxx', 'lastPurchaseDate': '25/08/22' },
        { 'id': 2, 'name': 'Kalam', 'due': 500.00, 'phone': 'xxxx', 'lastPurchaseDate': '30/08/22' },
        { 'id': 3, 'name': 'Gandhi', 'due': 3500.00, 'phone': 'xxxx', 'lastPurchaseDate': '20/08/22' },
        { 'id': 4, 'name': 'Indra', 'due': 2000.00, 'phone': 'xxxx', 'lastPurchaseDate': '31/08/22' },
        { 'id': 5, 'name': 'Murmu', 'due': 520.00, 'phone': 'xxxx', 'lastPurchaseDate': '23/08/22' }
        ])

    const [sales, setSales] = useState(
        {
            "lastMonth": { "noOfItems": "100", "worth": "25000" },
            "thisMonth": { "noOfItems": "50", "worth": "17000" },
            "yestarday": { "noOfItems": "10", "worth": "900" },
            "today": { "noOfItems": "50", "worth": "500" }
        })

    const [history, setHistory] = useState([
        { 'id': 255, 'item': 'baby food', 'date': '25/may' },
        { 'id': 125, 'item': 'chips', 'date': '24/may' },
        { 'id': 155, 'item': 'rice', 'date': '24/may' }
    ])



    return (
        <DataContext.Provider value={{ 'display': display, 'setDisplay': setDisplay, 'products': products, 'setProducts': setProducts, 'customerData': customerData, 'setCustomerData': setCustomerData, 'sales': sales, 'setSales': setSales, 'history': history, 'setHistory': setHistory }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState