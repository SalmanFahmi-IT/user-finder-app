import React from 'react';
import { Card, CardBody, InputGroup, InputGroupAddon,Input, Button, Row, Col } from'reactstrap';
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
        <React.Fragment>
            <Card className='mb-2 bg-light'>
                <CardBody>
                    <h3> Search Github Users</h3>
                    <p className="lead">Enter a username to fetch a user profile and repos</p>
                    <InputGroup>
                        <Input type="text" placeholder="Github username..." onChange={handleChange}/>
                        <InputGroupAddon addonType="prepend">
                            <Button color="success" onClick={(e) => handleSearch(e)}>
                                <i className="fa fa-search" />
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </CardBody>
            </Card>
            {
                user 
                ?   <Row>
                        <Col md="3"><UserInfo user={user}/></Col>
                        <Col md="9"><UserRepos repos={repos}/></Col>
                    </Row>
                :   "Loading..."
            }
            
        </React.Fragment>
    );
}

export default Home;