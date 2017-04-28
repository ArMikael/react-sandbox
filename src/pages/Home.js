import React from 'react';

import '../App.css';
import Subscribe from '../forms/Subscribe';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <h2>Subscribe to our Newsletter:</h2>
                    <Subscribe />
                </div>

                {this.props.children}
            </div>
        )
    }
}

export default Home;