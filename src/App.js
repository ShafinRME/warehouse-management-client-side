import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Home/Blogs/Blogs';
import Chart from './Pages/Home/Chart/Chart';
import Home from './Pages/Home/Home/Home';
import UpdateInventory from './Pages/Home/UpdateInventory/UpdateInventory';
import AuthRequirement from './Pages/LogIn/AuthRequirement/AuthRequirement';
import Login from './Pages/LogIn/Login/Login';
import Register from './Pages/LogIn/Register/Register';
import ManageItems from './Pages/ManageItems/ManageItems';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/chart' element={<Chart></Chart>}></Route>
        <Route path='/inventory/:inventoryId' element={<AuthRequirement><UpdateInventory></UpdateInventory></AuthRequirement>}></Route>
        <Route path='/addinventory' element={<AuthRequirement><AddItem></AddItem></AuthRequirement>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
