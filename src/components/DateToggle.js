import React from 'react';

class DateToggle extends React.Component {
    constructor() {
        super();

        let today = new Date();
        let date = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        this.fullDate = date + '/' + month + '/' + year;

        this.state = {
            openedDate: false
        }
    }

    toggleState() {
        this.setState({
            openedDate: !this.state.openedDate
        });
    }

    render() {
        return (
            <div>
                <h2 onClick={ this.toggleState.bind(this) }>Check Date</h2>

                { this.state.openedDate ?
                    <p> { this.fullDate } </p> :
                null }
            </div>
        )
    }
}

export default DateToggle;