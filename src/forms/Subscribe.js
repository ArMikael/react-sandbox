import React from 'react';

class Subscribe extends React.Component {
    getInitialState() {
        return {
            valid: false
        }
    }

    _submit(event){
        event.preventDefault();
        console.log(event);

        // if (this.state.valid) {
        //     console.log('Submit is successful!');
        // } else {
        //     console.log('Invalid Email.');
        // }
    }

    _validate(event){
        const value = event.target.value;

        this.setState({ valid: value.length > 2 });
    }

    render(){
        return (
                <form id="subscribeForm" onSubmit={this._submit}>
                    <input type="email" id="email" onChange={this._validate} />
                           {/*style={{ background: this.state.valid ? 'white' : 'red' }} />*/}
                    <button type="submit">Submit</button>
                </form>
        );
    }
}

export default Subscribe;