import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
      {/* <Login/> */}
      <Signup/>
      </header>
    </div>
  );
}

export default App;
