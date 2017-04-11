import React from 'react';

let Timer =  React.createClass ({
    getInitialState() {
        return {
            seconds: 0
        }
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