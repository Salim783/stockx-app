import React, { useState } from 'react';
import './login.css';
import oeil from '../../Assets/oeil.png';
import oeilnn from '../../Assets/oeilnn.png';
import fond from '../../Assets/imgfond.png';

export default function Login() {
    const [formData, setFormData] = useState({
        sexe: '',
        dateNaissance: '',
        pseudo: '',
        telephone: '',
        adresse: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function togglePasswordVisibility(inputId, eyeId) {
        const passwordInput = document.getElementById(inputId);
        const eyeIcon = document.getElementById(eyeId);

        if (passwordInput && eyeIcon) {
            const isPasswordVisible = passwordInput.type === 'text';
            passwordInput.type = isPasswordVisible ? 'password' : 'text';
            eyeIcon.src = isPasswordVisible ? oeilnn : oeil;
        }
    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Validation basique pour les mots de passe correspondants
        if (formData.password !== formData.confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        fetch(`${process.env.REACT_APP_API_URL}/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nom: formData.pseudo,
                email: formData.email,
                password: formData.password,
                telephone: formData.telephone,
                adresse: formData.adresse,
                date_naissance: formData.dateNaissance,
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Échec de l'inscription avec le statut " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Inscription réussie!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Erreur lors de l'inscription: " + error.message);
        });
    }

    return (
        <>
            <img src={fond} className='back' alt='' />
            <div className='cardpage'>
                <div className='containerlogin'>
                    <h1 className='titrelogin'>Inscription</h1>
                    <div className='cardlogin'>
                        <div className='check'>
                            <div className='checkboxx'>
                                <input type='radio' name="sexe" value="homme" checked={formData.sexe === 'homme'} onChange={handleChange} />
                                <p>Homme</p>
                            </div>
                            <div className='checkboxx'>
                                <input type='radio' name="sexe" value="femme" checked={formData.sexe === 'femme'} onChange={handleChange} />
                                <p>Femme</p>
                            </div>
                        </div>
                        <label>Entrer votre date de naissance</label>
                        <input type='date' className='datelogin' name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
                        <form className='formlogin' onSubmit={handleSubmit}>
                            <label>Nom</label>
                            <input type="text" placeholder="Pseudo" name="pseudo" className='inputborder' value={formData.pseudo} onChange={handleChange} />
                            <label>Numéros mobile</label>
                            <input type="tel" placeholder="numéros" name="telephone" className='inputborder' pattern="[0-9]{10}" value={formData.telephone} onChange={handleChange} required />
                            <label>Adresse</label>
                            <input type="text" placeholder="adresse" name="adresse" className='inputborder' value={formData.adresse} onChange={handleChange} />
                            <label>Entrer votre adresse mail</label>
                            <input type="email" placeholder="email" name="email" className='inputborder' value={formData.email} onChange={handleChange} />
                            <div className='logininputmdp'>
                                <div className='input-icon'>
                                    <label>Entrer votre mot de passe</label>
                                    <input type="password" placeholder="mdp" name="password" id='inputmdp' className='inputborder' value={formData.password} onChange={handleChange} />
                                    <img src={oeil} id='ouvert' onClick={() => togglePasswordVisibility('inputmdp', 'ouvert')} alt='' />
                                </div>
                            </div>
                            <div className='logininputmdp'>
                                <div className='input-icon'>
                                    <label>Confirmer votre mot de passe</label>
                                    <input type="password" placeholder="mdp" name="confirmPassword" id='inputmdp2' className='inputborder' value={formData.confirmPassword} onChange={handleChange} />
                                    <img src={oeil} id='ouvert2' onClick={() => togglePasswordVisibility('inputmdp2', 'ouvert2')} alt='' />
                                </div>
                            </div>
                            <input type='submit' value='Envoyer' className='confirmationlogin' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
