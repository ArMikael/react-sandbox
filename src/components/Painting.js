import React from 'react';

class Painting extends React.Component {
    render() {
        return (
            <li className="painting-item" id={ this.props.data.id }>
                <a href="#" className="painting-title">
                    { this.props.data.title }
                </a>
                <div className="painting-artist">
                    { this.props.data.artist }
                </div>
                <div className="painting-year">
                    { this.props.data.year }
                </div>
                <div className="painting-price">
                    { this.props.data.price }
                </div>
            </li>
        )
    }
}

export default Painting;