import React  from "react";
import GoodListElement from "../GoodListElement/GoodListElement";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";

export default class GoodList extends React.Component {

    onDelete = (id) => {
      this.props.onDelete(id);
    };
    render() {
        const { goods } = this.props;

        return (
            <section>
                <Row className="justify-content-between">
                    {
                        Array.isArray(goods) && goods.map((good) => {
                            return (
                                <GoodListElement
                                    key={good.id}
                                    good={good}
                                    onDelete={this.onDelete}
                                />
                            )
                        })
                    }
                </Row>
            </section>
        );
    }
}

GoodList.defauitProps = {
   goods: [],
};

GoodList.propTypes = {
    goods: PropTypes.array.isRequired,
};