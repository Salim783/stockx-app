import React, { useState } from 'react';
import './login.css';
import oeil from '../../Assets/oeil.png';
import oeilnn from '../../Assets/oeilnn.png';
import fond from '../../Assets/imgfond.png';

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    function togglePasswordVisibility(inputId, eyeId) {
        const passwordInput = document.getElementById(inputId);
        const eyeIcon = document.getElementById(eyeId);

        if (passwordInput && eyeIcon) {
            setPasswordVisible(!passwordVisible);

            if (passwordVisible) {
                passwordInput.type = 'password';
                eyeIcon.src = oeilnn;
            } else {
                passwordInput.type = 'text';
                eyeIcon.src = oeil;
            }
        }
    }

    return (
        <>
            <img src={fond} className='back' alt='' />
        <div className='cardpage'>
            <div className='containerlogin'>
                <h1 className='titrelogin'>Login</h1>
                <div className='cardlogin'>
                    <div className='check'>
                        <div className='checkboxx'><input type='checkbox' /><p>Homme</p></div>
                        <div className='checkboxx'><input type='checkbox' /><p>Femme</p></div>
                    </div>
                    <label>Entrer votre date de naissance</label>
                    <input type='date' className='datelogin' />
                    <form className='formlogin'>
                        <div className='pseudo'>
                            <div className='blase'>
                                <div className='blasein'>
                                    <label>Nom</label>
                                    <input type="text" placeholder="Pseudo" name="Pseudo" className='inputborder' />
                                </div>
                                <div className='blasein'>
                                    <label>Nom</label>
                                    <input type="text" placeholder="Pseudo" name="Pseudo" className='inputborder' />
                                </div>
                            </div>
                            <label>Entrer votre pseudo</label>
                            <input type="text" placeholder="Pseudo" name="Pseudo" className='inputborder' />
                        </div>
                        <label>Numéros mobile</label>
                        <input type="tel" placeholder="numéros" name="telephone" className='inputborder' pattern="[0-9]{10}" required />
                        <label>Adresse</label>
                        <input type="text" placeholder="adresse" name="adresse" className='inputborder' />
                        <label>Entrer votre adresse mail</label>
                        <input type="mail" placeholder="email" name="email" className='inputborder' id='mail' />
                        <div className='logininputmdp'>
                            <div className='input-icon'>
                                <label>Entrer votre mot de passe</label>
                                <input type="password" placeholder="mdp" name="mdp" id='inputmdp' className='inputborder' />
                                <img src={oeil} id='ouvert' onClick={() => togglePasswordVisibility('inputmdp', 'ouvert')} alt='' />
                            </div>
                        </div>
                        <div className='logininputmdp'>
                            <div className='input-icon'>
                                <label>Confirmer votre mot de passe</label>
                                <input type="password" placeholder="mdp" name="mdp" id='inputmdp2' className='inputborder' />
                                <img src={oeil} id='ouvert2' onClick={() => togglePasswordVisibility('inputmdp2', 'ouvert2')} alt='' />
                            </div>
                        </div>
                        <input type='submit' value='Envoyer' className='confirmationlogin' />
                    </form>
                </div>
            </div>
            <div className='connexion'>
            <div className='formlogin'>
                <h1>Connexion</h1>
                <label>Entrer votre adresse mail</label>
                <input type="mail" placeholder="email" name="email" className='inputborder' id='mail' />
                <div className='logininputmdp'>
                    <div className='input-icon'>
                        <label>Entrer votre mot de passe</label>
                        <input type="password" placeholder="mdp" name="mdp" id='inputmdp3' className='inputborder' />
                        <img src={oeil} id='ouvert3' onClick={() => togglePasswordVisibility('inputmdp3', 'ouvert3')} alt='' />
                    </div>
                </div>
                <input type='submit' value='Connexion' className='confirmationlogin' />
            </div>
            </div>
        </div>
        </>
    )
}
