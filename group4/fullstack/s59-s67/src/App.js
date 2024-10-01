import './App.css';
import Container from 'react-bootstrap/Container'
import AppNavbar from './component/AppNavbar'
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <div>
      <AppNavbar/>
      <Container>
      <Home/>
      </Container>
        </div> 
    </div>
  );
}

export default App;
