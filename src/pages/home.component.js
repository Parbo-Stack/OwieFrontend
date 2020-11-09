import React from "react";
import {Link} from "react-router-dom";
import './home.css'
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const Home = () => {
    return (
        <div className="grid">
            <div className="box1">
                <Link to={"/readstory"}>
                    <Card>
                        <CardImg top width="100%" src="https://www.flaticon.com/svg/static/icons/svg/3330/3330842.svg"/>
                    </Card>
                    <CardBody>
                        <CardTitle>Read Story</CardTitle>
                    </CardBody>
                </Link>
            </div>
            <div className="box2">
                <Link to={"/writestory"}>
                    <Card>
                        <CardImg top width="100%" src="https://www.flaticon.com/svg/static/icons/svg/996/996371.svg"/>
                    </Card>
                    <CardBody>
                        <CardTitle>Write Story</CardTitle>
                    </CardBody>
                </Link>
            </div>
            <div className="box3">
                <Link to={"/finishstory"}>
                    <Card>
                        <CardImg top width="100%" src="https://www.flaticon.com/svg/static/icons/svg/3194/3194321.svg"/>
                    </Card>
                    <CardBody>
                        <CardTitle>Finish Story</CardTitle>
                        <CardText/>
                    </CardBody>
                </Link>
            </div>
        </div>
    );
}

export default Home;