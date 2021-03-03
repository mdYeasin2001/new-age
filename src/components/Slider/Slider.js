import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = (props) => {
    const newsies = props.news.splice(1, 3);
    // console.log(newsies);
    return (
        <section>
            <Carousel>
                {newsies.map((news, i) => <Carousel.Item key={i} className="slider">
                                            <img
                                                className="d-block w-100"
                                                src={news.urlToImage}
                                                alt="Second slide"
                                            />

                                            <Carousel.Caption className="text-start">
                                                <h3>{news.title}</h3>
                                                <p>{news.description}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                )}
            </Carousel>
        </section>
    );
};

export default Slider;