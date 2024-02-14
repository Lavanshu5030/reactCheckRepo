import React from 'react';
import Home from './components/Home'; // Import the IndexPage component
import Tour from './components/Tour';
import Nav from './components/Nav';
import { AdminLogin } from './components/AdminLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerSignup from './components/CustomerSignup';
import { ManagerLogin } from './components/ManagerLogin';
import { CustomerLogin } from './components/CustomerLogin';;


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path='/Tours' element={<Tour />}></Route>
        {/* Add more routes here if needed */}
        <Route path='/managerLogin' element={<ManagerLogin />}></Route>
        <Route path='/adminLogin' element={<AdminLogin/>}></Route>
        <Route path='/customerLogin' element={<CustomerLogin/>}></Route>
        <Route path='/customerSignup' element={<CustomerSignup/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
