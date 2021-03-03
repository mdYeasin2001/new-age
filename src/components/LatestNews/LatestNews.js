import React, { useEffect, useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';

const LatestNews = (props) => {
    const [latestNews, setLatestNews] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e51a5085b6314f16878112af9f4aea06')
            .then(res => res.json())
            .then(data => setLatestNews(data.articles))
    }, [latestNews]);
    return (
        <div className="px-md-5 px-3">
            <h4>All Latest News</h4>
            <Row className="g-5">
                <Col md={8}>
                    {latestNews.splice(1, 10).map((news, i) =>
                        <Row className="mb-3" key={i}>
                            <Card className="border-0">
                                <Row className="shadow">
                                    <Col md={4}>
                                        <Card.Img variant="top" src={news.urlToImage} />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <Card.Title>{news.title}</Card.Title>
                                            <Card.Text>{news.description}</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    )}
                </Col>
                <Col md={4}>
                    <h5>Popular News</h5>
                    {latestNews.splice(1, 5).map((news, i) =>
                        <Row className="mb-3" key={i}>
                            <Card className="border-0">
                                <Row className="shadow">
                                    <Col md={4}>
                                        <Card.Img variant="top" src={news.urlToImage} />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <Card.Title>{news.title}</Card.Title>
                                            <Card.Text>{news.description}</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default LatestNews;