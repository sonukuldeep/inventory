import './App.css';
import DataState from './Context/DataState';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Billing from './Components/Billing';
import Products from './Components/Products';
import Critical from './Components/Critical';
import Customers from './Components/Customers';
import Links from './Components/Links';
import History from './Components/History';
import Login from './Components/Login';
import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';



function App() {

  const navigate = useNavigate();

  useEffect(() => {

    navigate('/login')

  }, [])

  const logoutMsg = (<h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Thanks for visiting</h1>)

  return (
    <>
      <DataState>
        <header>
          <nav>
            <Navbar />
            <Sidebar />
          </nav>
        </header>
        <section>
          <article>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/billing" element={<Billing />} /> {/*order book*/}
              <Route path="/products" element={<Products />} />
              <Route path="/critical" element={<Critical />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/links" element={<Links />} />
              <Route path="/history" element={<History />} />
              <Route path="/logout" element={logoutMsg} />
            </Routes>
          </article>
        </section>
      </DataState>

    </>
  );
}

export default App;
