import { useState, React } from "react";
import { CarouselItem, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} on Select={handleSelect}>
      <Carousel.Item>
        <Image
          src="https://raw.githubusercontent.com/Mttphan261/portfolio/main/.github/imgs/labassistantfolio.png"
          alt="Lab Assistant"
          className="project-image"
        />
        <Carousel.Caption>
          <h3>The Street Fighter Lab Assistant</h3>
          <p>Training companion for Street Fighter 6. View and personalize resources such as notes, matchups and video libraries.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://raw.githubusercontent.com/Mttphan261/portfolio/main/.github/imgs/labassistantfolio.png"
          alt="Lab Assistant"
          className="project-image"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://raw.githubusercontent.com/Mttphan261/portfolio/main/.github/imgs/labassistantfolio.png"
          alt="Lab Assistant"
          className="project-image"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Projects;
