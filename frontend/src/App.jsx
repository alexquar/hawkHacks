import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NewEvent from './pages/NewEvent';
import { Navigate } from 'react-router-dom';
import About from './pages/About';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
<Navbar />

<div className="pages">
<Routes>

<Route path='/'  element={<Home />}  />
<Route path='/newEvent' element={<NewEvent />} />
<Route path='/about' element={<About />} />
<Route path='/signup' element={<Signup />} />
<Route path='/login' element={<Login />} />
</Routes>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
