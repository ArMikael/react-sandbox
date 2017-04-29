import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <div id={ this.props.id }>
                <h2 className="painting-title">
                    { this.props.data.title }
                </h2>

                <h3 className="painting-artist">
                    { this.props.data.artist }
                </h3>

                <p className="painting-description">
                    { this.props.data.description }
                </p>

                <strong className="painting-price">
                    { this.props.data.price }
                </strong>
            </div>
        )
    }
}

export default Product;