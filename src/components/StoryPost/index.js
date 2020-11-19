import React, {useEffect, useState} from "react";
import StoryService from "../../services/story.service";

const StoryPost = (props) => {
    const initialStoryState = {
        id: null,
        title: "",
        body: "",
        authorId: "",
        datePublished: new Date(),
        published: false
    };

    const [currentStory, setCurrentStory] = useState(initialStoryState);

    const getStory = id => {
        StoryService.getById(id)
            .then((data) => {
                setCurrentStory({
                    title: data.data[0].title,
                    body: data.data[0].body,
                    author: data.data[0].author,
                    datePublished: data.data[0].datePublished
                });
                console.log(data.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getStory(props.match.params.id);
    }, [props.match.params.id]);

    return (
        <div>
                <div className="Post">
                    <h4>Edit Story</h4>
                    <p>{currentStory.title}</p>
                    <h2>{currentStory.body}</h2>
                    <p1>{currentStory.authorId}</p1>
                    <p3>{currentStory.datePublished}</p3>

                    ) : (
                    <button/>
                    )}
                </div>
            ) : (
                <div>

                </div>
            )}

        </div>
    );
}

export default StoryPost;