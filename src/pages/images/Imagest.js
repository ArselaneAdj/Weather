import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons";
import Carousel from 'better-react-carousel'



const Imagest = () => {
  return (
    
    <Carousel  cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className="header display-1" ><b>TIZI-OUZOU</b> IMAGES</div>
        <Link className="header display-1" style={{textDecorationLine:'none'}} to="/Tizi">return</Link>
        <hr className="hr" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://i.pinimg.com/564x/07/d0/14/07d0143c2fa9b3207468eb5fca051fd8.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://i.pinimg.com/564x/56/41/bc/5641bc03c01c18e7970a2056ee67c181.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://i.pinimg.com/564x/3b/b3/6d/3bb36d95929c91e7b200fec35f0d435c.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/00/a7/73/00a7739188653a6f65e51193a4c6d023.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/72/0f/66/720f66c3b8d6eb71157530551551fb42.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/f6/02/f6/f602f6a8c1cc197972b6cf9b2197b749.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://i.pinimg.com/564x/f1/4e/7d/f14e7d2dc745236a725f95f1364c7363.jpg" />
      </Carousel.Item>
      
      {/* ... */}
    </Carousel>
  )
}
export default Imagest;
