import React, {useState, useEffect} from 'react';
import './style.css';
import StoryService from "../../services/story.service";
import {NavLink} from 'react-router-dom';
import Card from '../Card';

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        retrieveStories();
    }, []);

    const retrieveStories = () => {
        StoryService.getAllStories()
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="sidebarContainer" style={{
            width: props.width
        }}>
            <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Lionel)</p>
                </div>
            </Card>

            <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Stories</span>
                </div>

                <div className="recentPosts"> {

                    posts && posts.map(post => {
                        return (
                            <NavLink key={post.id} to={`/post/${post.id}`}>
                                <div className="recentPost">
                                    <h3>{post.title}</h3>
                                    <span>{post.datePublished}</span>
                                </div>
                            </NavLink>
                        );
                    })
                }
                </div>

            </Card>
        </div>

    )
}
export default Sidebar