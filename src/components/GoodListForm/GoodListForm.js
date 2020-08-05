import React from "react";
import { Form, Button } from "react-bootstrap";

export default class GoodListForm extends React.Component {
    state= {
       title: "",
       weight: "",
       description: "",
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            title: "",
            weight: "",
            description: "",
        })
    };

    onInputChange = ({target}) => {
        this.setState({
            [target.name]: target.value,
        })
    };

    render() {
        const { title, weight, description } = this.state;

        return (
            <Form>
                <Form.Group controlId="formTitle">
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Title..."
                        value={title}
                        onChange={this.onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formWeight">
                    <Form.Control
                        type="text"
                        name="weight"
                        placeholder="Weight..."
                        value={weight}
                        onChange={this.onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Control
                        type="text"
                        name="description"
                        placeholder="Description..."
                        value={description}
                        onChange={this.onInputChange}
                    />
                </Form.Group>
                <Button onClick={this.onFormSubmit} variant="primary" className="text-uppercase">add</Button>
            </Form>
        );
    }
}