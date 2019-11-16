import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, CardImg } from 'reactstrap';

const UserInfo = ({ user }) => (
  <Row>
      <Col md='4'>
          <CardImg top width="100%" src={user.avatar_url}/>
          <p>
            <a href={user.html_url} rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-block mb-4">View Profile</a>
          </p>
      </Col>
      <Col md='8'>
          <ListGroup flush>
          <ListGroupItem>Fullname: {user.name}</ListGroupItem>
          <ListGroupItem>Company: {user.company}</ListGroupItem>
          <ListGroupItem>Repos: {user.public_repos}</ListGroupItem>
          <ListGroupItem>Location: {user.location}</ListGroupItem>
          <ListGroupItem>Member since: {user.created_at}</ListGroupItem>
          </ListGroup>
      </Col>
  </Row>
);

export default UserInfo;