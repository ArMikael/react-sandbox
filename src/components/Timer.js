import React from 'react';

const Timer =  React.createClass ({
    getInitialState() {
        return {
            seconds: 0
        }
    },

    // Validation in React
    propTypes: {
        // seconds: React.PropTypes.string.isRequired
    },

    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    },

    componentDidMount() {
        setInterval(this.tick, 1000);
    },

    render() {
        return (
            <h4 className="timer">Прошло {this.state.seconds} секунд</h4>
        );
    }
});

export default Timer;