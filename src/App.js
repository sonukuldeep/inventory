import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';
import Critical from './Components/Critical';
import Customers from './Components/Customers';

function App() {
  const initialState = { 'home': false, 'links': false, 'history': false,'dashboard': false, 'products':false,'critical': false,'customers': false}
  const [btnTrigger, setBtnTrigger] = useState({...initialState,'dashboard': true})

  return (
    <>
      <header>
        <nav>
          <Navbar />
          <Sidebar initialState={initialState} setTrigger={setBtnTrigger} trigger={btnTrigger}/>
        </nav>
      </header>
      <section>
        <article>
          <Dashboard trigger={btnTrigger}/>
          <Products trigger={btnTrigger}/>
          <Critical trigger={btnTrigger}/>
          <Customers trigger={btnTrigger}/>
        </article>
      </section>
    </>
  );
}

export default App;
