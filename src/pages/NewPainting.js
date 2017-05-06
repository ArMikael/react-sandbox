import React from 'react';

class NewPainting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artist: '',
            title: '',
            description: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Form is submitted. ', this.state.artist, this.state.title, this.state.description );
    }

    handleArtistChange(event) {
        this.setState({
            artist: event.target.value
        });
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        });
    }

    render() {
        return (
            <form name="newPainting" onSubmit={ this.handleSubmit }>
                <fieldset>
                    <label htmlFor="artist">Artist:</label>
                    <input type="text"
                           value={ this.state.artist }
                           id="artist"
                           onChange={ this.handleArtistChange }
                           placeholder="Artist"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                           value={ this.state.title }  id="title"
                           onChange={ this.handleTitleChange }
                           placeholder="Title"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        value={ this.state.description }
                        id="description" cols="30" rows="10"
                        onChange={ this.handleDescriptionChange }
                        placeholder="Description"
                    />
                </fieldset>

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default NewPainting;