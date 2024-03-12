import React from 'react'
import Navbar from './components/navigation/navbar.js'
import Acceuil from './components/Acceuil/acceuil.js'
import Footer from './components/Footer/footer.js'
import Contact from './components/contact/contact.js'
import Login from './components/inscritpions/login.js'
import {Routes, Route} from 'react-router-dom';
const App = () => { 
    return (    
        <div>
        <Navbar/>
        <Routes>
            <Route path='/acceuil' element={<Acceuil />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/login'  element={<Login />}/>
        </Routes>
        <Footer/>
        </div>
    )
}
export default App