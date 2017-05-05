import React from 'react';
import PaintingsList from '../components/PaintingsList';
const Data = require('../data/data.json');

console.log("data.json", Data);


class Arts extends React.Component {
    render() {
        return (
            <PaintingsList paintings={ Data } />
        )
    }
}

export default Arts;