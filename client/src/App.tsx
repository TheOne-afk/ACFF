
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import Register from "./pages/Register"
import Hardware from './pages/Hardware';
import WiFiConnection from './pages/WiFiConnection';
import ClockComponent from './pages/TimeFeed';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<SignIn  />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='feed' element={<Hardware />}></Route>
        <Route path='wifi' element={<WiFiConnection />}></Route>
        <Route path='clock' element={<ClockComponent />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
