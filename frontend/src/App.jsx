import React from 'react'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Services from './pages/Services'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



import Cardiology from './specialisations/Cardiology'
import Dental from './specialisations/Dental'
import Dermatology from './specialisations/Dermatology'
import Neurology from './specialisations/Neurology'
import Orthopedics from './specialisations/Orthopedics'
import Footer from './components/Footer'
import Login from './components/Login'
import Update from './components/UpdatePassword'
import UserProfile from './components/UserProfile'; 


import ProtectedRoute from './components/ProtectedRoute';

// import Register from './components/Register'
import Appointments from './components/Appointments'
import MyAppointments from './components/MyAppointments'



const App = () => {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/services' element = {<Services />} />
        <Route path='/pages' element = {<Register />} />
        <Route path='/pages/login' element={<Login />} />
        
        {/* <Route path='/pages' element={<Register />} /> */}
        {/* <Route path = '/pages/update_password' element={<UpdatePassword />} /> */}
       
        <Route path='/contact' element = {<Contact />} />
         <Route path='/appointments'>
            <Route index element={<Appointments />} />
            <Route path='my' element={<MyAppointments />} />
         </Route>
        <Route path='/Cardiology' element = {<Cardiology />} /> 
        <Route path='Dental' element = {<Dental />} />  
        <Route path='/Dermatology' element = {<Dermatology />} /> 
        <Route path='/Neurology' element = {<Neurology />} />
        <Route path='/Orthopedics' element = {<Orthopedics />} />

            {/* protected routes */}
          <Route path='/pages/update' element={<ProtectedRoute> <Update /> </ProtectedRoute>} />
           <Route path="/profile" element={<ProtectedRoute> <UserProfile /> </ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App 