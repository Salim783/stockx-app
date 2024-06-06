// src/components/Login.js
import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import './connexion.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique d'authentification, en général vous envoyez les données à votre backend
        // Si l'authentification réussit, appelez login avec les informations utilisateur
        login({ email }); // Simplicité, on utilise seulement l'email comme information utilisateur
        alert('Connexion réussie');
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Mot de passe" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Se connecter</button>
        </form>
    );
}

export default Login;
