import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Customer from './Components/Customer';

function App() {

  const [btnTrigger, setBtnTrigger] = useState({ 'home': false, 'links': false, 'history': false,'dashboard': true, 'products':false,'critical': false,'customers': false})

  return (
    <>
      <header>
        <nav>
          <Navbar />
          <Sidebar setTrigger={setBtnTrigger} trigger={btnTrigger}/>
        </nav>
      </header>
      <section>
        <article>
          <Dashboard trigger={btnTrigger}/>
          <Customer />
        </article>
      </section>
    </>
  );
}

export default App;
