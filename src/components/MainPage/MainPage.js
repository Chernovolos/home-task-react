import React from "react";
import GoodList from "../GoodList/GoodList";
import { goods } from "../../Mocks/GoodsMoks";
import { Container, Row, Col } from "react-bootstrap";

class MainPage extends React.Component {
    state = {
      goods,
    };

    render() {
        console.log("state.goods", goods);

        return (
            <Container>
                <section className="mb-3">
                    <Row className="text-center">
                        <Col>
                            <h1>Fridge</h1>
                        </Col>
                    </Row>
                </section>
                <GoodList goods={goods}/>
            </Container>
        );
    }
}

export default MainPage;