import React from 'react';

class Painting extends React.Component {
    render() {
        return (
            <div className="painting-item" id={ this.props.data.id }>
                <h2 className="painting-title">
                    { this.props.data.title }
                </h2>

                <p className="item-description">
                    { this.props.data.description }
                </p>

                <strong className="item-price">
                    { this.props.data.price }
                </strong>
            </div>
        )
    }
}

export default Painting;