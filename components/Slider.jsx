import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <div>
      <Carousel controls={false} fade={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-3"
            src="https://images.pexels.com/photos/1205062/pexels-photo-1205062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="Fender Guitar"
            width={1200}
            height={627}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-3"
            src="https://images.pexels.com/photos/1539788/pexels-photo-1539788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="Blue Les Paul Electric Guitar"
            width={1200}
            height={627}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-3"
            src="https://images.pexels.com/photos/459797/pexels-photo-459797.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="Acoustic Guitar"
            width={1200}
            height={627}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
