import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

const UserRepos = ({repos}) => {
    return (
    <Card>
        <CardHeader><i className="fa fa-folder" /> <strong>Repositories</strong></CardHeader>
        <CardBody>
            {
                repos && repos.map(item => {
                return  <div className="repos" key={item.id}>
                            <div className="repos-header">
                                <a href={item.html_url}>
                                    <i className="fa fa-folder" /><strong> {item.name}</strong>
                                </a>
                                <div className="box right">
                                    <span><i className={item.private ? 'fa fa-lock' : 'fa fa-globe'} /></span>
                                    <span><i className="fa fa-star" /> {item.stargazers_count}</span>
                                    <span><i className="fa fa-code-fork" /> {item.forks}</span>
                                    <span><i className="fa fa-eye" /> {item.watchers}</span>
                                </div>
                            </div>
                            <p>{item.description || "Please add some description !"}</p>
                        </div>
                })
            }
        </CardBody>
    </Card>
)};

export default UserRepos;