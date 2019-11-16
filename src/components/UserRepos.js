import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const UserRepos = ({ repos }) => (
    <ListGroup>
        {
            repos && repos.map(item => {
            return <ListGroupItem key={item.id}>{item.name}</ListGroupItem>
            })
        }
    </ListGroup>
);

export default UserRepos;