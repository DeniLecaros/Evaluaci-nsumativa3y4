import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
    const slides = [
        {
            src: 'https://i.pinimg.com/564x/40/e6/ea/40e6ead0c48e85e8eb3c784b08dd8938.jpg',
            alt: 'Anime Image 1',
            caption: 'Explora nuestros animes favoritos',
        },
        {
            src: 'https://getwallpapers.com/wallpaper/full/f/9/f/1316645-dc-superheroes-wallpaper-1920x1080-mobile.jpg',
            alt: 'Superhero Image 1',
            caption: 'Conoce a los superhéroes más poderosos',
        },
    ];

    return (
        <div className="homepage">
            <div className="intro-text-overlay">
                <div className="intro-text">
                    <h1>Bienvenido a la SPA de Héroes</h1>
                    <p>Puedes explorar diferentes secciones como Animes, Comics, y más.</p>
                </div>
            </div>
            <Carousel>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={slide.src} alt={slide.alt} />
                        <Carousel.Caption>
                            <h3>{slide.caption}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default HomePage;
