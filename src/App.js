import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Navbar';
import Search from './Pages/Search';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyContextProvider } from './MyContextProvider';
import Passenger from './Pages/Passenger';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/passenger" element={<Passenger/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer />
      </MyContextProvider>
      
    </div>
  );
}

export default App;
