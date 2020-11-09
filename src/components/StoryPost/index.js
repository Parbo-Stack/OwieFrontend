import React, {useState, useEffect} from 'react';
import StoryService from "../../services/story.service";
import Card from '../Card';
import './style.css';

const StoryPost = (props) => {

    const [post, setPost] = useState({
        id: "",
        title: "",
        body: "",
        authorId: "",
        datePublished: new Date()
    });

    //const [slug, setSlug] = useState('');
    const [postId, setPostId] = useState('');

    useEffect(() => {
        const postId = props.match.params.postId;
        const post = StoryService.get(post => post.id === postId);
        setPost(post);
        setPostId(postId)
    },[post, props.match.params.postId]);


    if (post.title === "") return null;


    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.title}</span>
                    <h1 className="postTitle">{post.body}</h1>
                    <span className="postedBy">posted on {post.datePublished} by {post.authorId}</span>
                </div>

                <div className="postContent">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>

            </Card>
        </div>
    )

}

export default StoryPost
