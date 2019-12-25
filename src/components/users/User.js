import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class User extends Component {
    render() {

        const { login, avatar_url, html_url, repos_url } = this.props.user;

        return (
            <div>
                <div className="card mb-2">
                    <img className="card-img-top" src={avatar_url} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{login}</h4>
                            <p className="card-text">
                                <Link to={'users/'+login} className="btn btn-success mr-2">Show</Link>
                                <a href={html_url} className="btn btn-info mr-2">Github Profile</a>
                                <a href={repos_url} className="btn btn-warning">Repositories</a>
                            </p>
                        </div>
                </div>
            </div>
        )
    }
}

export default User
