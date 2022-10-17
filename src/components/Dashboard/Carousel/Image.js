import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Image() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src="carousel.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel-image.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel-images.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>3</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="carousel-food.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Image;
