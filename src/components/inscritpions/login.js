import React from 'react'
import'../inscritpions/login.css'
import oeil from '../../Assets/oeil.png'
import oeilnn from '../../Assets/oeilnn.png'
import fond from '../../Assets/imgfond.png'
export default function login() {
    
    function mdp() {
        const passwordInput = document.getElementById('inputmdp'); 
        const eyeIcon = document.getElementById('ouvert'); 
      
        if (passwordInput && eyeIcon) {
          if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.src = oeil; 
          } else {
            passwordInput.type = 'password';
            eyeIcon.src = oeilnn;
          }
        }
      }
    

  return (
    <>
    <img src={fond} className='back' alt=''/>
<div className='containerlogin'>
        <h1 className='titrelogin'>Login</h1>
    <div className='cardlogin'>
        <div className='check'>
            <div className='checkboxx'><input type='checkbox'/><p>Homme</p></div>
            <div className='checkboxx'><input type='checkbox'/><p>Femme</p></div>
        </div>
        
            <label>Entrer votre date de naissance</label>
            <input type='date' className='datelogin'/>
        <form className='formlogin'>
            <div className='pseudo'>

            <div className='blase'>
                <div className='blasein'>
                    <label>Nom</label>
                    <input type="text" placeholder="Pseudo" name="Pseudo" className='inputborder'/>
                </div>
                <div className='blasein'>
                    <label>Nom</label>
                    <input type="text" placeholder="Pseudo" name="Pseudo" className='inputborder'/>
                </div>
            </div>
                <label>Entrer votre pseudo</label>
                <input type="text" placeholder="Pseudo" name="Pseudo" className='inputborder'/>
            </div>
            
            <label>Numéros mobile</label>
                <input type="tel" placeholder="numéros" name="telephone" className='inputborder' pattern="[0-9]{10}" required/>

            <label>Adresse</label>
                <input type="text" placeholder="adresse" name="adresse" className='inputborder'/>

        <label>Entrer votre adresse mail</label>
                <input type="mail" placeholder="email" name="email" className='inputborder' id='mail'/>

            <div className='logininputmdp'>
                <div className='input-icon'>
                    <label>Entrer votre mot de passe</label>
                        <input type="password" placeholder="mdp" name="mdp" id='inputmdp' className='inputborder'/>
                        <img src={oeil} id='ouvert' onClick={mdp} alt=''/>
                </div>
            </div>

            <div className='logininputmdp'>
                <div className='input-icon'>
                <label>Confirmer votre mot de passe</label>
                    <input type="password" placeholder="mdp" name="mdp" id='inputmdp' className='inputborder'/>
                    <img src={oeil} id='ouvert' onClick={mdp} alt=''/>
                </div>
            </div>
                <input type='submit' value='Envoyer' className='confirmationlogin'/>
        </form>
    </div>
</div>
    </>
  )
}
