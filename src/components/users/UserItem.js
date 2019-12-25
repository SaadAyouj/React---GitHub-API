import React, { Component } from 'react'
import Axios from 'axios';
import User from './User';

export class UserItem extends Component {

        state = {
            user: {}
        }
    componentWillMount() {

        const login = this.props.match.params.login;
        Axios.get(`https://api.github.com/users/${login}`)
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
    }

    render() {
        const { user } = this.state;
        return (
            <div>
                <User user={user} />
            </div>
        )
    }
}

export default UserItem
