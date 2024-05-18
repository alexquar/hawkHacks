import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NewEvent from './pages/NewEvent';
import { useAuthContext } from './hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import About from './pages/About';
import Filter from './pages/Filter';
function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
    <BrowserRouter>
<Navbar />

<div className="pages">
<Routes>
<Route path='/about'  element={user ? <About /> : <Navigate to="/login" />}  />
<Route path='/newEvent'  element={user ? <NewEvent /> : <Navigate to="/login" />}  />
<Route path='/'  element={user ? <Home /> : <Navigate to="/login" />}  />
<Route path='/signup' element={ !user ? <Signup />: <Navigate to='/'/>} />
<Route path='/login' element={ !user ? <Login />: <Navigate to='/'/>} />
<Route path='/filterEvents' element={<Filter />} />
</Routes>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
