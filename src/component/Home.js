import React from 'react';
//import HomePageImage from '../component/HomePageImage';
import NavBar from './NavBar/NavBar';
import NavBarSmall from './NavBar/NavBarSmall';
import { Carousel, Button } from 'react-bootstrap';

const Home = () => {

    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    
    return (
        <div>
            <NavBarSmall />
            <NavBar />
            <div>
                <Carousel className="carousel">
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            // src="holder.js/800x400?text=First slide&bg=373940"
                            src={url}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={url}
                            alt="second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={url}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <HomePageImage /> */}
            <div className="button-mv">
                <Button variant="danger" size="lg">Our Mission</Button>
                <Button variant="light" size="lg">Our Vission</Button>
            </div>
            <h1 className="mt-5">React Testing Application Website</h1>
        </div>

    );

}

export default Home;