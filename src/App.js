import React from 'react'
import { Provider } from 'react-redux'
import {Routes,Route,Link} from "react-router-dom";
import Table from './Table';
import Edit from './Edit';
import store from './Store';
import Home from './Home';
// import Slice from './Slice';
import ContactUs from './ContactUs';
import "./App.css";
import AddNew from './AddNew';

function App() {
  return (
    <div>
    <div className='navbar'>
      <Link to="./Home" className='link'>Home</Link>
      <Link to="./Student" className='link'>Student</Link>
      <Link to="./ContactUs" className='link'>ContactUs</Link>
      </div>
      <Provider store={store}>
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Student" element={<Table/>}/>
            <Route path="/ChangeData" element={<Edit/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path="/NewStudent" element={<AddNew />}/>
        </Routes>
      </Provider>
    </div>
  )
}

export default App
