import React from 'react';
import { Card, CardBody, Row, Col, Jumbotron, Container, Button } from'reactstrap';
import axios from 'axios';
import UserInfo from '../components/UserInfo';
import UserRepos from '../components/UserRepos';

function Home(){
    //Github Access Url
    const client_id = "3b925c08aab40ac38d05";
    const client_secret = "31be1b1285e20f238e8777adb3bc11907739a47b";
    const API_URL = `https://api.github.com/users/`;
    const secretKey = `?client_id=${client_id}&client_secret=${client_secret}`;
    //State variables
    const [username, setUsername] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [repos, setRepos] = React.useState(null);

    const handleChange = e => setUsername(e.target.value);
    const getUserDataByUserName = async e => {
        e.preventDefault();
        const urlUserInfo = `${API_URL + username + secretKey}`;
        const urlUserRepos= `${API_URL + username}/repos${secretKey}`;
        const userInfo = await axios(urlUserInfo);
        const userRepos = await axios(urlUserRepos);
        setUser(userInfo.data)
        setRepos(userRepos.data)
    }

    return(
        <Row>
            <Col md="4">
            <Jumbotron fluid>
                <Container fluid>
                    <h3> Search Github Users</h3>
                    <p className="lead">Enter a username to fetch a user profile and repos</p>
                    <input 
                    type="text"  
                    className="form-control" 
                    placeholder="Github username..." 
                    onChange={handleChange}
                    />
                    <br />
                    <Button block color='success' type='submit' 
                    onClick={(e) => getUserDataByUserName(e)}>Search</Button>
                </Container>
            </Jumbotron>
            </Col>
            <Col md="8">
                <Card>
                    <CardBody>
                        {
                            user 
                            ? 
                            <React.Fragment>
                                <UserInfo user={user} /> 
                                <h4>Repositories</h4>
                                <UserRepos repos={repos} />
                            </React.Fragment>
                            : 'No user selected !'
                        }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Home;