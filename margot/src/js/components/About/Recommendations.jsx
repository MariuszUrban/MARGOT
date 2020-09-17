import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/_about/_recommendations.scss";

import React from "react";

export default function Recommendations() {
  return (
      <Carousel interval={15000} bsPrefix={'carousel'}>
        <Carousel.Item bsPrefix={'carousel-item'} interval={15000}>
            <div className="opinion">
            <p className='content'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quo. </p>
            <p className='author'> - Mariusz Urban</p>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={15000}>
        <div className="opinion">
            <p  className='content'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quo. Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
            <p className='author'> - Margot Wybrańska</p>
            </div>
          
        </Carousel.Item>
        <Carousel.Item interval={15000}>
        <div className="opinion">
            <p  className='content'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quo. Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
            <p className='author'> - Ulrike von Hindenbrandt</p>
            </div>
        </Carousel.Item>
      </Carousel>
  );
}
