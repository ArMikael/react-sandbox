import React from 'react';
import Painting from './Painting';

class PaintingsList extends React.Component {
    render() {
        return (
            <div className="paintings-container">
                {
                    this.props.paintings.map(function(item){
                        return (
                            <Painting key={ item.id } data={ item } />
                        )
                    })
                }
            </div>
        )
    }
}

export default PaintingsList;