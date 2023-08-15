import { useState, React} from 'react'
import { CarouselItem } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

function Projects() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} on Select={handleSelect}>
        <Carousel.Item>
            
        </Carousel.Item>
    </Carousel>
  )
}

export default Projects