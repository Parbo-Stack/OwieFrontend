import React, {Component} from 'react';
import CommentAdd from './CommentAdd';
import Comment from './Comment';
import axios from "../../services/storypart.service";

class CommentGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {id: 1, body: 'This is the first'},
                {id: 2, body: 'This is the sescond'}
            ]
        }
    }

    handleCommentSubmit(data) {
        const postData =  {
            comment: data,
        };

            axios.create()
                .then(response => {
                    this.setState({
                        id: response.data.comments.length + 1,
                        body: response.data.comment,
                        // localTime:response.data.localTime,
                        // storyId:response.data.storyId,
                    });
                    this.setState({})
                })
                .catch(e => {
                    console.log(e);
                });
        };


    renderComments() {
        const {comments} = this.state;
        comments.map(comment => {
            const {id, body} = comment;
            return (
                <Comment key={id} body={body}/>
            );
        })
    }

    render() {
        return (

            <div>
                <Comment/>
                <CommentAdd handleCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
}

export default CommentGroup;

// if (document.getElementById('comments-wrapper')) {
//     ReactDOM.render(<CommentGroup/>, document.getElementById('comments-wrapper'));
// }