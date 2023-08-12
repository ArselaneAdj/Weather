import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons";
import Carousel from 'better-react-carousel'



const Imagesa = () => {
  return (
    
    <Carousel  cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className="header display-1" ><b>ALGER</b> IMAGES</div>
        <Link className="header display-1" style={{textDecorationLine:'none'}} to="/Blida">return</Link>
        <hr className="hr" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://i.pinimg.com/564x/1d/88/53/1d88530b97a69d25c8dffa1945c3a5b3.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://i.pinimg.com/564x/33/4b/a2/334ba2d3cd7f4205426103fa26a618a2.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://i.pinimg.com/564x/bb/a8/c8/bba8c864badf2435ecf8f4c7bfcce078.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/88/ef/17/88ef17f813612fabe3fc41fa2da2119f.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/1a/d1/ce/1ad1ce8485c3e511345401ac4c5eeb63.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/68/02/ab/6802ab72040dcd01cc35b6782a77bf1f.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/56/f6/8b/56f68b3775caee004ad8a62cf7f4f8bc.jpg" />
      </Carousel.Item>
      
      {/* ... */}
    </Carousel>
  )
}
export default Imagesa;

