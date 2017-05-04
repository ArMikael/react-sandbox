import React from 'react';
import Timer from '../components/Timer';
import DateToggle from '../components/DateToggle';

class Widgets extends React.Component {
    render() {
        return(
            <div>
                < Timer />
                < DateToggle />
            </div>
        )
    }
}

export default Widgets;