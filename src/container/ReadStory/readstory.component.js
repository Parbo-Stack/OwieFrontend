import React from 'react';
import './style.css';
import RecentPosts from "./RecentStories";
import Layout from '../../components/Layout';

const ReadStory = props => {

    return (
        <div>
            <Layout>
                <RecentPosts style={{width: '70%'}}/>
            </Layout>

        </div>
    );
}

export default ReadStory;