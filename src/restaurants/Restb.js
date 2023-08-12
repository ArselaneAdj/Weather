import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons";
import Carousel from 'better-react-carousel'



const Restb = () => {
  return (
    <Carousel  cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className="header display-1" >SOME <b>BOUMERDES</b> RESTAURANTS</div>
        <Link className="header display-1" style={{textDecorationLine:'none'}} to="/Alger">return</Link>
        <hr className="hr" />
      </Carousel.Item>
      <Carousel.Item>
        <div class="card" style={{width:"25rem"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12784.704678707956!2d3.4729602!3d36.766341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e68e5ab46bbe5%3A0x6b43dd2155eeaeac!2sRESTAURANT%20ARONA!5e0!3m2!1sen!2sdz!4v1691874015779!5m2!1sen!2sdz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="card-body">
            <h5 class="card-title">Restauran Arona</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Service options: Dine-in · Takeaway · Delivery</h6>
            <p class="card-text">Address: Bd du Front de Mer, Boumerdès 35000</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="card" style={{width:"25rem"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12785.70437440641!2d3.4643082!3d36.7603444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e698d1b0568cd%3A0x28cc8f447374165e!2sLa%20terrasse%20restaurant!5e0!3m2!1sen!2sdz!4v1691874132204!5m2!1sen!2sdz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="card-body">
            <h5 class="card-title">La Terrasse Restaurant</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Service options: Dine-in · Takeaway</h6>
            <p class="card-text">Address: Bd du Oued Tatareg, Boumerdes</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="card" style={{width:"25rem"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12787.375966877522!2d3.4766589!3d36.7503156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e694dd77c1a1f%3A0x305a9bd778ff195c!2sGolden%20fried%20chicken%20boumerdes!5e0!3m2!1sen!2sdz!4v1691874250221!5m2!1sen!2sdz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="card-body">
            <h5 class="card-title">Golden Fried Chicken Boumerdes</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Service options: Dine-in · Takeaway</h6>
            <p class="card-text">Address: QF2G+4MF, Cité alliliguia RN, N24, Boumerdès</p>
          </div>
        </div>
      </Carousel.Item>
    
    
     {/* ... */}
    </Carousel>
    
    )
}
export default Restb;

