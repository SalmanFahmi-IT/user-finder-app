import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, CardImg, Badge } from 'reactstrap';
import { HomeContext } from '../containers/Home';

const UserInfo = () => (
  <HomeContext.Consumer>{(context => {
    const { user } = context;
    return(
      <Row>
          <Col md='4'>
              <CardImg top width="100%" src={user.avatar_url}/>
              <p style={{marginTop: '5px'}}>
                <a 
                href={user.html_url} 
                rel="noopener noreferrer" 
                target="_blank" 
                className="btn btn-secondary btn-block mb-4"
                >
                  View Profile
                </a>
              </p>
          </Col>
          <Col md='8'>
              <div className="box">
                <Badge color="primary">Followers: {user.followers}</Badge>
                <Badge color="primary">Followers: {user.following}</Badge>
                <Badge color="primary">Public gists: {user.public_gists}</Badge>
                <Badge color="primary">Public repos: {user.public_repos}</Badge>
              </div>
              <ListGroup flush>
              <ListGroupItem><h5>{user.name}</h5></ListGroupItem>
              <ListGroupItem><i className="fa fa-building" /> {user.company}</ListGroupItem>
              <ListGroupItem><i className="fa fa-map-marker" /> {user.location}</ListGroupItem>
              <ListGroupItem><i className="fa fa-calendar" /> {user.created_at}</ListGroupItem>
              <ListGroupItem><i className="fa fa-link" /> {user.blog}</ListGroupItem>
              </ListGroup>
          </Col>
      </Row>
    );
  })}
  </HomeContext.Consumer>
);

export default UserInfo;