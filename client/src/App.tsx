
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import Register from "./pages/Register"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<SignIn  />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
