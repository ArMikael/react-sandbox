import React from 'react';
import Painting from './Painting';

class PaintingsList extends React.Component {
    render() {
        return (
            <div className="paintings-container">
                <ul className="paintings-list">
                    <li className="table-header">
                        <div className="painting-title">Title</div>
                        <div className="painting-artist">Artist</div>
                        <div className="painting-year">Year</div>
                        <div className="painting-price">Price</div>
                    </li>

                    {
                        this.props.paintings.map(function(item){
                            return (
                                <Painting key={ item.id } data={ item } />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PaintingsList;