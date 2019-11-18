import React from 'react';
import { Card, CardBody, CardImg } from 'reactstrap';
import moment from 'moment';

const UserAvatar = ({ user }) => (
  <React.Fragment>
    <Card className="mb-1">
      <CardImg width="100%" src={user.avatar_url}/>
    </Card>
    <a href={user.html_url} rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-block mb-4">
      View Profile
    </a>
  </React.Fragment>
);

const UserInfo = ({user}) => {
  return(
    <Card>
      <CardBody>
        <UserAvatar user={user} />
        <div>
            <h5>{user.name}</h5>
            <p>Member since { moment(user.created_at).format('DD/MM/YYYY')}</p>
            <p><i className="fa fa-building" /> {user.company}</p>
            <p><i className="fa fa-map-marker" /> {user.location}</p>
            <p><i className="fa fa-link" /> {user.blog}</p>
        </div>
      </CardBody>
    </Card>
  )};

export default UserInfo;