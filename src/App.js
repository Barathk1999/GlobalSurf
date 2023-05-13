import './App.css';
import Header from './Components/Header'
import About from './Components/About';
import Programs from './Components/Programs';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div >
      <Header /> 
      <About />
      < Programs/>
      <Footer />
    </div>
  );
}

export default App;
