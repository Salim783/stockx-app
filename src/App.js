import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/navbar.js';
import Acceuil from './components/Acceuil/acceuil.js';
import Footer from './components/Footer/footer.js';
import Contact from './components/contact/contact.js';
import Login from './components/inscritpions/login.js';
import Connexion from './components/connexion/connexion.js';
import Favorite from './components/favoris/favoris.js';
import Profil from './components/profile/profile.js';
import Deconnexion from './components/deconnexion/deconnexion.js'
import { FavoritesProvider } from './context/FavoriteContext.js';
import { AuthProvider } from './context/authContext.js';

const App = () => { 
    return (    
        <Router>
            <AuthProvider>
                <FavoritesProvider>
                    <Navbar/>
                    <Routes>
                        <Route path='/acceuil' element={<Acceuil />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/connexion' element={<Connexion />} />
                        <Route path='/deconnexion' element={<Deconnexion />} />
                        <Route path='/favorie' element={<Favorite />} />
                        <Route path='/profile' element={<Profil />} />
                    </Routes>
                    <Footer/>
                </FavoritesProvider>
            </AuthProvider>
        </Router>
    );
};

export default App;
