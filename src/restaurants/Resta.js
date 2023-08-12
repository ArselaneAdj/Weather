import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons";
import Carousel from 'better-react-carousel'



const Resta = () => {
  return (
    <Carousel  cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className="header display-1" >SOME <b>ALGER</b> RESTAURANTS</div>
        <Link className="header display-1" style={{textDecorationLine:'none'}} to="/Blida">return</Link>
        <hr className="hr" />
      </Carousel.Item>
      <Carousel.Item>
        <div class="card" style={{width:"25rem"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12784.692407951143!2d3.0516748!3d36.7664146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb25db6dd7fed%3A0x3756bc80927ccc99!2sRestaurant%20Le%20Bearnais!5e0!3m2!1sen!2sdz!4v1691872716721!5m2!1sen!2sdz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="card-body">
            <h5 class="card-title">Restaurant Le Bearnais</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Service options: Dine-in · Takeaway</h6>
            <p class="card-text">Address: Q382+HM7, Rue Ahmed, El Djazair 16000</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="card" style={{width:"25rem"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12788.580897864342!2d3.073273!3d36.7430851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb29e1d83cad3%3A0x35d569bbb6d4f71c!2sLe%20Bon%20Gibier!5e0!3m2!1sen!2sdz!4v1691873298978!5m2!1sen!2sdz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="card-body">
            <h5 class="card-title">Le Bon Gibier</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Service options: Dine-in · Takeaway · Delivery</h6>
            <p class="card-text">Address: riad el feth, Bois des Arcades, Local 02, El Madania 16015</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="card" style={{width:"25rem"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12785.504266430848!2d3.0356685!3d36.7615448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb37abbc1eb3b%3A0x4a4d5fdc173f77f2!2sLa%20Perla%20Nera!5e0!3m2!1sen!2sdz!4v1691873484612!5m2!1sen!2sdz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="card-body">
            <h5 class="card-title">La Perla Nera</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Service options: Dine-in · Takeaway</h6>
            <p class="card-text">Address: 55, 55 Chem. Poirson, El Biar 16000</p>
          </div>
        </div>
      </Carousel.Item>
    
    
     {/* ... */}
    </Carousel>
    
    )
}
export default Resta;

