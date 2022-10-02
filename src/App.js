import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

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
        </article>
      </section>
    </>
  );
}

export default App;
