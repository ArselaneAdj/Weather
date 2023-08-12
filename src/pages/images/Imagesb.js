import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons";
import Carousel from 'better-react-carousel'



const imagesb = () => {
  return (
    
    <Carousel  cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className="header display-1" ><b>BOUMERDES</b> IMAGES</div>
        <Link className="header display-1" style={{textDecorationLine:'none'}} to="/Alger">return</Link>
        <hr className="hr" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://i.pinimg.com/564x/6c/30/f2/6c30f27d5fafa77aab250ac228c072de.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://i.pinimg.com/564x/39/6c/9e/396c9eba3f9787a76dfa1cc10d3b2a2a.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://i.pinimg.com/564x/c2/64/ea/c264ea7daf51286e2c496af17d8a03b6.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/3f/9e/e9/3f9ee9616eeab2ba781c9711a9b6d500.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/26/4e/35/264e35b172852054d0528208f2152d1c.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/5f/99/c3/5f99c32fc992041259791063c0a50e2f.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  src="https://i.pinimg.com/564x/e9/28/96/e92896f45f59d8bd40a4f541102b16c9.jpg" />
      </Carousel.Item>
      
      {/* ... */}
    </Carousel>
  )
}
export default imagesb;
