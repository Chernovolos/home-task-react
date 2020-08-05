import React from "react";
import { Button, Col, ListGroup } from "react-bootstrap";

export default class GoodListElement extends React.Component {

    onDelete = () => {
        this.props.onDelete(this.props.good.id);
    };

    render() {
        const { title, weight, description } = this.props.good;

        return (
            <Col sm={6} className="mb-3 font-weight-light">
                <ListGroup>
                    <ListGroup.Item variant="dark" className="font-weight-bolder text-uppercase">
                        Title: {title}
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark" className="font-weight-bolder">
                        Weight: {weight}
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark" className="font-weight-bolder">
                        Descriptions: {description}
                    </ListGroup.Item>
                </ListGroup>
                <Button onClick={this.onDelete} variant={"danger"} className="text-uppercase mt-3">Delete</Button>
            </Col>
        );
    }
}
