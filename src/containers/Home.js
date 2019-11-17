import React from 'react';
import { Card, CardBody, Row, Col, Jumbotron, Container, Button } from'reactstrap';
import axios from 'axios';
import UserInfo from '../components/UserInfo';
import UserRepos from '../components/UserRepos';
import { API_URL, SECRET_KEY } from '../api'

function Home(){
    //State variables
    const [username, setUsername] = React.useState('SalmanFahmi-IT');
    const [user, setUser] = React.useState(null);
    const [repos, setRepos] = React.useState(null);
    //Services
    const getUserDataByUserName = async name => {
        const urlUserInfo = `${API_URL + name + SECRET_KEY}`;
        const urlUserRepos= `${API_URL + name}/repos${SECRET_KEY}`;
        const userInfo = await axios(urlUserInfo);
        const userRepos = await axios(urlUserRepos);
        setUser(userInfo.data)
        setRepos(userRepos.data)
    }
    //Lifecycle
    React.useEffect(
        () => {
            getUserDataByUserName(username);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    //Functions
    const handleChange = e => setUsername(e.target.value);
    const handleSearch = e => {
        e.preventDefault();
        getUserDataByUserName(username);
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
                    onClick={(e) => handleSearch(e)}>Search</Button>
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
                                <h4>Public repositories</h4>
                                <UserRepos repos={repos} />
                            </React.Fragment>
                            : 'Github username is empty!'
                        }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Home;