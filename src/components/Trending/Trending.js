import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Trending = (props) => {
    return (
        <section className="px-md-5 px-3 py-md-3 py-1">
            <h4>Trending Now</h4>
            <Row className="row-cols-1 row-cols-md-4 g-4">
                {props.tradingNews.splice(1, 4).map((news, i) =>
                    <Col className="mb-md-0 mb-3">
                        <Card className="h-100">
                            <Card.Img variant="top" src={news.urlToImage} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>)}
            </Row>
        </section>
    );
};

export default Trending;