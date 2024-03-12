import React from 'react'
import '../contact/contact.css'
export default function contact() {
  return (
    <div>
<div>
    <div className="contact">
    
    <div className="infocontact">
     <h1>Nous contacter</h1>
    </div>

<div className="inncontact">

<div className="upcontact">
         <div className="innamecontact">
               <label for="name">Nom</label>
               <input type="text" className="inputtcontact" placeholder="Nom" />
         </div>
     
         <div className="innamecontact">
          <label for="name">Téléphone</label>
          <input type="text" className="inputtcontact" placeholder="Téléphone" />
         </div>
         <div className="innamecontact">
            <label for="name">Société</label>
            <input type="text" className="inputtcontact" placeholder="Société" />
           </div>
</div>

<div className="down">
         <div className="innamecontact">
             <label for="name">Prénom</label>
             <input type="text" className="inputtcontact" placeholder="Prénom" />
         </div>
     
         <div className="innamecontact">
             <label for="name">E-mail</label>
             <input type="text" className="inputtcontact" placeholder="E-mail" />
         </div>
         <div className="innamecontact">
            <label for="name">Fonction</label>
            <input type="text" className="inputtcontact" placeholder="Cuisinier" />
           </div>
</div>
</div>
</div>
<div className="boxxx">
<div className="btttn">
    <div className="bttn"><button className="btn">UPLAOD</button></div>
    <div><input className='uplaodfile' type='file'/></div>
</div>
<div className="re_captcha">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <form action="?" method="POST">  <div className="g-recaptcha" data-sitekey="your_site_key"></div>
    <br/>
    </form>
</div>
</div>
<div className="drl">
<label for="horns">Objet</label>
    <div>
        <select name="Ingrédients" className="derouler">
            <option value="1">Objet</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    </div>
    <div className="msg">
        <label for="name">Message</label>
        <input type="text" className="msgg" placeholder="Message"/>
    </div>
</div>
<div className="map">
<iframe
  width="520"
  height="400"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  id="gmap_canvas"
  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20paris+()&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  title="Carte de Paris"
  className="mapp"
></iframe>
</div>
<div className="bttn bttnr"><button className="btn btnr">Envoyer</button></div>
    
</div>
    </div>
  )
}
