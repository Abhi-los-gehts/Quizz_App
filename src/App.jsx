import './App.css';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import StartPage from './components/Pages/StartPage';

function App() {
  return (
    <div className="App">
      
{/* navbar */}
<Navbar />
  
  {/* StartPage */}
  <StartPage />
  
{/* footer */}
<Footer />

    </div>
  );
}

export default App;
