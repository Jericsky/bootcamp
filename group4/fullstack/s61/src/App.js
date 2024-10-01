import './App.css';
import Container from 'react-bootstrap/Container';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home'
import Courses from './pages/Courses'
import News from './pages/News';
import Feedback from './pages/Feedback';
import Register from './pages/Register';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <div>
        <AppNavbar />
        <Container>
          <Home/>
          <Courses />
          <News />
          <Feedback/>
          <Register />
          <Login/>
        </Container>
      </div>
    </div>
  );
}

export default App;
