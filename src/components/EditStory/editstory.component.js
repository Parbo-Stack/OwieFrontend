import React, {useState, useEffect} from "react";
import StoryService from "../../services/story.service";

const EditStory = props => {
    const initialStoryState = {
        id: null,
        title: "",
        body: "",
        authorId: "",
        datePublished: new Date(),
        published: false
    };
    const [currentStory, setCurrentStory] = useState(initialStoryState);
    const [message, setMessage] = useState("");

    const getStory = id => {
        StoryService.get(id)
            .then(response => {
                setCurrentStory(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getStory(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setCurrentStory({...currentStory, [name]: value});
    };

    const updatePublished = status => {
        var data = {
            id: currentStory.id,
            title: currentStory.Title,
            body: currentStory.body,
            authorId: currentStory.authorId,
            published: status
        };

        StoryService.updateStory(currentStory.id, data)
            .then(response => {
                setCurrentStory({...currentStory, published: status})
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const updateStory = () => {
        StoryService.updateStory(currentStory.id, currentStory)
            .then(response => {
                console.log(response.data);
                setMessage("The story was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            })
    };

    const deleteStory = () => {
        StoryService.deleteById(currentStory.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/editstory");
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div>
            {currentStory ? (
                <div className="edit-form">
                    <h4>Edit Story</h4>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control my-3"
                                id="title"
                                required
                                value={currentStory.title}
                                onChange={handleInputChange}
                                placeholder="Story Title"
                                name="title"
                            />
                        </div>
                        <textarea
                            className="form-control my-3"
                            id="body"
                            required
                            value={currentStory.body}
                            onChange={handleInputChange}
                            placeholder="Body"
                            name="body">
                       </textarea>
                        <input
                            type="text"
                            id="authorId"
                            required
                            onChange={handleInputChange}
                            value={currentStory.authorId}
                            className="form-control my-3"
                            placeholder="Story Author"
                            name="authorId"
                        />
                        <input
                            id="datePublished"
                            required
                            onChange={handleInputChange}
                            value={currentStory.datePublished}
                            className="form-control my-3"
                            placeholder="Story datePublished"
                        />
                        <div className="form-group">
                            <label>
                                <strong>Status:</strong>
                            </label>
                            {currentStory.published ? "Published" : "Pending"}
                        </div>
                    </form>

                    {currentStory.published ? (
                        <button
                            className="badge badge-primary mr-2"
                            onClick={() => updatePublished(false)}
                        >
                            UnPublish
                        </button>
                    ) : (
                        <button
                            className="badge badge-primary mr-2"
                            onClick={() => updatePublished(true)}
                        >
                            Publish
                        </button>
                    )}

                    <button className="badge badge-danger mr-2" onClick={deleteStory}>
                        Delete
                    </button>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateStory}
                    >
                        Update
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br/>
                    <p>Please click on a Story...</p>
                </div>
            )}
        </div>
    );
}

export default EditStory;