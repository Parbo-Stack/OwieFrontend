import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {useParams} from "react-router-dom"


export default function Post() {
    let {id} = useParams();

    const [post, setPost] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:8080/api/story/${id}`).then((data) => {
            setPost({
                title: data.data[0].title,
                body: data.data[0].body,
                authorId: data.data[0].authorId,
                datePublished: data.data[0].datePublished
            });
        });
    }, [id]);

    return (
        <div className="Post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h4>{post.authorId}</h4>
            <h3>{post.datePublished}</h3>
        </div>
    )
}
