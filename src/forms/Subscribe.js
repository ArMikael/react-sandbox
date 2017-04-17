import React from 'react';

class Subscribe extends React.Component {
    constructor() {
        super();

        // When using ES6 syntax set default state in constructor instead of getInitialState
        this.state = { valid: false };

        // When using ES6 syntax bind this to all methods in constructor
        this._validate = this._validate.bind(this);
        this._submit = this._submit.bind(this);
    }

    _submit(event){
        event.preventDefault();
        console.log(event);

        if (this.state.valid) {
            console.log('Submit is successful!');
        } else {
            console.log('Invalid Email.');
        }
    }

    _validate(event){
        const value = event.target.value;
        this.setState({ valid: value.length > 4 });
        // console.log('Validating...');
    }

    render(){
        return (
                <form id="subscribeForm" onSubmit={this._submit}>
                    <input type="email" id="email" onChange={this._validate}
                           style={{ background: this.state.valid ? 'white' : 'pink' }} />
                    <button type="submit">Submit</button>
                </form>
        );
    }
}

Subscribe.propTypes = {

};

Subscribe.defaultProps = {

};

export default Subscribe;