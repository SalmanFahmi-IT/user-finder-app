import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { HomeContext } from '../containers/Home';

const UserRepos = () => (
    <HomeContext.Consumer>{(context => {
        const { repos } = context;
        return(
            <ListGroup>
            {
                repos && repos.map(item => {
                return  <ListGroupItem key={item.id}>
                            <div className="repos-header">
                                <i className="fa fa-folder" />
                                <a href={item.url}>
                                    <strong> {item.name}</strong>
                                </a>
                                <Badge color='warning' style={{float: 'right',lineHeight:'inherit'}}>
                                <i className={item.private ? 'fa fa-lock' : 'fa fa-globe'} /> 
                                <span> {item.private ? 'Private' : 'Public'} </span>
                                </Badge>
                            </div>
                            <hr />
                            <p>{item.description || "Please add some description !"}</p>
                            <hr />
                            <div className="box">
                                <Badge color="dark">Created at: {item.created_at}</Badge>
                                <Badge color="dark">Stars: {item.stargazers_count}</Badge>
                                <Badge color="dark">Forks: {item.forks}</Badge>
                                <Badge color="dark">Watchers: {item.watchers}</Badge>
                            </div>
                        </ListGroupItem>
                })
            }
        </ListGroup>
        );
    })}
    </HomeContext.Consumer>
);

export default UserRepos;