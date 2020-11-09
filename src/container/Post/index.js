import React from 'react';
import './style.css';
import StoryPost from '../../components/StoryPost';

const Post = (props) => {

    console.log(props);

    return(
        <layout>
            <StoryPost {...props}/>
        </layout>
    )
}

export default Post;