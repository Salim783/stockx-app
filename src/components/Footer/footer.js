import React from 'react'
import logo from '../../Assets/logo.png'
import facebook from '../../Assets/facebook.png'
import insta from '../../Assets/insta.png'
import twitter from '../../Assets/twitter.png'
import ancre from '../../Assets/ancre.png'
import './footer.css'
import { Link } from 'react-router-dom'
export default function footer() {
  return (
    
    <div className='footer' id='footercontact'>
        <div className='foot'>
            <img src={logo} className='logo' alt=''/>
        <input type="search" name='q' placeholder="Recherche" className='search'/>
            <ul className='ulfooter'>
                <Link><li className='lifooter'>Homme</li></Link>
                <Link><li className='lifooter'>Femme</li></Link>
                <Link><li className='lifooter'>Enfant</li></Link>
                <Link><li className='lifooter'>Accessoires</li></Link>
            </ul>
            <ul className='ulfooter'>
                <li className='lifooter'>Numéros</li>
                <li className='lifooter'>Adresse du siege</li>
                <li className='lifooter'>Mail</li>
                <li className='lifooter'>legal terms</li>
            </ul>
            <a href='#ancre'><img src={ancre} alt=''/></a>
            </div>
        <div>
            <hr className='hrfooter'/>
        </div>
        <div className='divlogofooter'>
            <Link><img src={facebook} className='logofooter' alt=''/></Link>
            <Link><img src={insta} className='logofooter' alt=''/></Link>
            <Link><img src={twitter} className='logofooter' alt=''/></Link>
        </div>
    </div>
    
  )
}
