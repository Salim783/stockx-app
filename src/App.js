import React from 'react';
import Navbar from './components/navigation/navbar.js';
import Acceuil from './components/Acceuil/acceuil.js';
import Footer from './components/Footer/footer.js';
import Contact from './components/contact/contact.js';
import Login from './components/inscritpions/login.js';
import Connexion from './components/connexion/connexion.js';
import Favorite from './components/favoris/favoris.js';
import Profil from './components/profile/profile.js'
import { Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoriteContext.js';
import { AuthProvider } from './context/authContext.js';


const App = () => { 
    return (    
        <div>
            <Navbar/>
            <AuthProvider> {/* Wrap AuthProvider around components that need authentication */}
                <FavoritesProvider> {/* Wrap FavoritesProvider around components that need favorites */}
                    <Routes>
                        <Route path='/acceuil' element={<Acceuil />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/connexion' element={<Connexion />} />
                        <Route path='/favori' element={<Favorite />} />
                        <Route path='/profile' element={<Profil />} />
                    </Routes>
                </FavoritesProvider>
            </AuthProvider>
            <Footer/>
        </div>
    );
};

export default App;
