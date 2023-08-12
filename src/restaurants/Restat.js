import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons";
import Carousel from 'better-react-carousel'



const Restat = () => {
  return (
    <Carousel  cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className="header display-1" >SOME<br/> <b>TIZI-OUZOU</b> RESTAURANTS</div>
        <Link className="header display-1" style={{textDecorationLine:'none'}} to="/Tizi">return</Link>
        <hr className="hr" />
      </Carousel.Item>
      <Carousel.Item>
        <div class="card" style={{width:"25rem"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12793.653087799428!2d4.0388318!3d36.7126347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dc931f3b00041%3A0x4a445263b18b9ad3!2sRestaurant%20Pikanya!5e0!3m2!1sen!2sdz!4v1691874393622!5m2!1sen!2sdz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="card-body">
            <h5 class="card-title">Restaurant Pikanya</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Service options: Dine-in · Takeaway · No-contact delivery</h6>
            <p class="card-text">Address: Rue des Frères Chaffa, Tizi Ouzou 15000</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="card" style={{width:"25rem"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12793.638601165283!2d4.0481451!3d36.7127217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dc8755b5a7b6b%3A0x4972c3a331dfb9f9!2sL&#39;Ambassade!5e0!3m2!1sen!2sdz!4v1691874472513!5m2!1sen!2sdz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="card-body">
            <h5 class="card-title">L'Ambassade</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Service options: Dine-in · Takeaway</h6>
            <p class="card-text">Address: Centre-Ville, Tizi Ouzou 15000</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="card" style={{width:"25rem"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12792.893948447123!2d4.0421826!3d36.7171935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dc7d911f011d5%3A0xf2e3fe08a94b3c53!2sVa%20Bene!5e0!3m2!1sen!2sdz!4v1691874587601!5m2!1sen!2sdz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="card-body">
            <h5 class="card-title">Va Bene</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Service options: Dine-in · Takeaway · No-contact delivery</h6>
            <p class="card-text">Address: Rue Kerrad Rachid, immeuble Benyahi</p>
          </div>
        </div>
      </Carousel.Item>
    
    
     {/* ... */}
    </Carousel>
    
    )
}
export default Restat;

