import React from 'react';
const Data = require('../data/data.json');


class Product extends React.Component {
    render() {
        console.log(this.props);
        let id = this.props.match.params.id;
        console.log(id);
        let data = Data.ArtsData;
        console.log('Data: ', data);
        let product = data[id];
        console.log('Product: ', product);

        return (
            <div id={ product.id }>
                <h2 className="painting-title">
                    { product.title }
                </h2>

                <h3 className="painting-artist">
                    { product.artist }
                </h3>

                <p className="painting-description">
                    { product.description }
                </p>

                <strong className="painting-price">
                    { product.price }
                </strong>
            </div>
        )
    }
}

export default Product;