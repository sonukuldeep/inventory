import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Customer from './Components/Customer';

function App() {
  return (
    <>
      <header>
        <nav>
          <Navbar />
          <Sidebar />
        </nav>
      </header>
      <section>
        <article>
          <Dashboard display={false}/>
          <Customer />
        </article>
      </section>
    </>
  );
}

export default App;
