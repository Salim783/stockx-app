import React, { useState, useContext } from 'react';
import AuthContext from '../../context/authContext';

const Connexion = () => {
    const [pseudo, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pseudo, password }),
            });
    
            if (!response.ok) {
                throw new Error(`Échec de la connexion avec le statut ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Réponse du serveur:', data);
    
            login(data.user);
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            alert('Identifiants incorrects. Veuillez réessayer.');
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={pseudo}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Connexion;
