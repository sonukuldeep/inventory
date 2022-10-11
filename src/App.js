import './App.css';
import DataState from './Context/DataState';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Billing from './Components/Billing';
import Products from './Components/Products';
import Critical from './Components/Critical';
import Customers from './Components/Customers';

function App() {

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
            <Dashboard />
            <Billing />
            <Products />
            <Critical />
            <Customers />
          </article>
        </section>
      </DataState>
    </>
  );
}

export default App;
