import React from 'react';
import { NavLink } from 'react-router-dom';

class Painting extends React.Component {
    render() {
        return (
            <li className="painting-item" id={ this.props.data.id }>
                <NavLink to={ 'arts/product/' + this.props.data.id } data={ this.props.data } className="painting-title">
                    { this.props.data.title }
                </NavLink>
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