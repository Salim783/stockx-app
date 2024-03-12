import React from 'react'
import jordan from '../../Assets/jordan.png'
import favoris from '../../Assets/favoris.png'
import offwhite from '../../Assets/offwhite.png'
import airmax from '../../Assets/airmaxx.png'
import jordan1 from '../../Assets/jordan1.1.png'
import './acceuil.css'
 function Acceuil() {
  return (
    <>
    <div className='card1'>
        <div className='card2'>
            <img src={jordan} className='imgacceuil'  alt="" />
        <p>Jordan 1 haute rétro originale coloris bleu pur</p>
            <div>
             <p className='price'>149 €</p>
             <button type='button'><img src={favoris} alt=''/></button>
            </div>
            <p>Nom d'utilisateur qui à posté</p>
        </div>
        <div className='card2'>
            <img src={airmax} className='imgacceuil' alt=''/>
        <p>Nike Air Max 1/97 Sean Wotherspoon (lacets supplémentaires)</p>
            <div>
                <p className='price'>728 €</p>
                <button type='button'><img src={favoris} alt=''/></button>
            </div>
            <p>Nom d'utilisateur qui à posté</p>
        </div> 
        <div className='card2'>
            <img src={offwhite} className='imgacceuil' alt=''/>
        <p>Customizer Imagines a Virgil Abloh x fragment design x Nike Air Jordan 1</p>
            <div>
                <p className='price'>685 €</p>
                <button type='button'><img src={favoris} alt=''/></button>
            </div>
            <p>Nom d'utilisateur qui à posté</p>
        </div>    
        <div className='card2'>
            <img src={jordan1} className='imgacceuil' alt=''/>
        <p>Limited Edition Jordan 1 'Wheat Denim' Sneakers</p>
            <div>
                <p className='price'>260 €</p>
                <button type='button'><img src={favoris} alt=''/></button>
            </div>
            <p>Nom d'utilisateur qui à posté</p>
        </div>
    </div>
    </>
  )
}
 export default Acceuil;