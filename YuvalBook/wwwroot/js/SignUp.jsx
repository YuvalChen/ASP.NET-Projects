var CommentBox = React.createClass({
    handleCommentSubmit: function (comment) {
        var data = new FormData();
        data.append('author', comment.author);
        data.append('text', comment.text);

        var xhr = new XMLHttpRequest();
        xhr.open('post', this.props.submitUrl, true);
        xhr.onload = function () {
        }.bind(this);
        xhr.send(data);
    },
    render: function () {
        return (
            <div className="commentBox">
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});


var CommentForm = React.createClass({
    getInitialState: function () {
        return { FirstName: '', LastName: '', Email: '', FirstName: '', FirstName: '', FirstName: '', text: '' };
    },
    handleAuthorChange: function (e) {
        this.setState({ author: e.target.value });
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        this.setState({ author: '', text: '' });
    },
    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name:"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Last Name:"
                    value={this.state.text}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Email:"
                    value={this.state.text}
                    onChange={this.handleAuthorChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
});