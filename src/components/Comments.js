import React from 'react';

class Comments extends React.Component {
    render() {
        return (
            <div className="comments" id="commentsContainer">
                <p>
                    No comments.
                </p>

                <p>{ this.props.comments }</p>

            </div>

        )
    }
}

export default Comments;
