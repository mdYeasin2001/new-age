import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';

const LatestNews = () => {
    const [latestNews, setLatestNews] = useState([]);
    useEffect(() =>{
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e51a5085b6314f16878112af9f4aea06')
        .then(res => res.json())
        .then(data => setLatestNews(data.articles))
      }, []);
    return (
        <div className="px-md-5 px-3">
            <h4>All Latest News</h4>
            <Row>
                <Col md={8}>
                    {latestNews.splice(1, 10).map((news, i) =>
                        <Row key={i}>
                            <Card>
                                <Card.Img variant="top" src={news.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{news.title}</Card.Title>
                                    <Card.Text>{news.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    )}
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default LatestNews;