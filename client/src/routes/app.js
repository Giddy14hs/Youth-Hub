import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import Home from '../../src/pages/home/Home'
import Entrepreneur from '../pages/entrepreneurDashboard/employer'
import Investor from "../pages/investorDashboard/Investor"
import Login from '../pages/login/login'
import Mentor from "../pages/mentorDashboard/Mentor"
import Navbar from "../components/navbar/navbar"
import Footer from '../components/footer/Footer'
import {Layout} from "antd"

const LayoutWithConditionalNavFooter = ({ children }) => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login';

  return (
    <Layout>
      {!hideNavAndFooter && <Navbar />}
      {children}
      {!hideNavAndFooter && <Footer />}
    </Layout>
  );
};


const App = () => {
  return (
    <BrowserRouter>
    <LayoutWithConditionalNavFooter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/EntrepreneurDashboard' element={<Entrepreneur/>}/>
      <Route path='/InvestorDashboard' element={<Investor />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/MentorDashboard' element={<Mentor />}/>
      <Route path='/' element={<Navbar />}/>
    </Routes>
    </LayoutWithConditionalNavFooter>
    </BrowserRouter>
  )
}

export default App;