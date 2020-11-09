import React from 'react';
import './style.css';
import Card from '../../../components/Card';

const RecentPosts = (props) => {
    return(
        <div style={props.style}>
            <Card style = {{marginBottom: '20px'}}>
                <div style={{textAlign: 'center'}}>

                    <span>Featured</span>
                    <h2>Fitness Mantra To Live Fit Life</h2>
                    <span>posted onJuly 21, 2016 bySora Blogging Tips</span>
                    <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up.
                        Securing Marianne led welcomed offended but offering six rapt...</p>

                    <button>Read More</button>

                </div>
            </Card>
        </div>
    )
}

export default RecentPosts