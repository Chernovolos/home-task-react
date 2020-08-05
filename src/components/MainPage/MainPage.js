import React from "react";
import { goods } from "../../Mocks/GoodsMoks";
import { Container, Row, Col } from "react-bootstrap";
import GoodList from "../GoodList/GoodList";
import GoodListForm from "../GoodListForm/GoodListForm";
import { addNewElement, deleteElementById, getTotal } from "../../Utils/goodsUtils";

class MainPage extends React.Component {
    state = {
        goods,
        total: getTotal(goods),
    };

    recalculateTotal = () => {
        this.setState((state) => {
            return {
                total: getTotal(state.goods),
            }
        })
    };

    onAdd = (newElement) => {
        const newArray = addNewElement(newElement, this.state.goods);
        this.setState({
            goods: newArray,
            total: getTotal(newArray),
        })
    };

    onDelete = (id) => {
        const newArray = deleteElementById(id, this.state.goods);
        this.setState({
            goods: newArray,
            total: getTotal(newArray),
        })
    };

    render() {
        const { goods, total } = this.state;

        return (
            <Container>
                <section className="mb-4">
                    <Row className="text-center">
                        <Col>
                            <h1>Fridge</h1>
                        </Col>
                    </Row>
                </section>
                <section className="mb-4">
                    <Row>
                        <Col sm={6}>
                            <GoodListForm onAdd={this.onAdd}/>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row className="mb-3">
                        <Col>
                            <h1>Total: {total}</h1>
                        </Col>
                    </Row>
                    <GoodList goods={goods} onDelete={this.onDelete}/>
                </section>
            </Container>
        );
    }
}

export default MainPage;