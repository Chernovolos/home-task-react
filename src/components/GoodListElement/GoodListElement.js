import React from "react";
import { Col, ListGroup } from "react-bootstrap";

class GoodListElement extends React.Component {

    render() {
        const { title, weight, description } = this.props.goods;

        return (
            <Col sm={5} className="mb-5 font-weight-light">
                <ListGroup>
                    <ListGroup.Item variant="dark">
                        Title: {title}
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                        Weight: {weight}
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                        Descriptions: {description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        );
    }
}

export default GoodListElement;