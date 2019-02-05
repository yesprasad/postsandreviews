import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
    state = {
        user: {}
    }

    getUserDetails = async () => {
        const userdetails = await Axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.Id}`)
        this.setState({user: userdetails.data})
    }

    componentWillMount() {
        this.getUserDetails()
    }

    setCompanyDetails () {
        if(!this.state.user.company) return null;
        const company = this.state.user.company;
        return(
        <div>
            <div><strong>company details: </strong></div>
            <div><span>company name: </span>{company.name}</div>
            <div><span>catch phrase: </span>{company.catchPhrase}</div>
            <div><span>bs: </span>{company.bs}</div>
        </div>
            )
    }

    render() {
        const user = this.state.user;
        console.log(`user: ${JSON.stringify(user)}`)
        
        return(
            <div>
                <div>
                <Link to={`/`} class="fa fa-chevron-circle-left" style={{padding:'5px'}}>back</Link>
                </div>
                <div className="user_container">
                    <div className="avatar">
                    {/* image placeholder 
                    can be used in future to load the image of user if the service returns it */}
                        <img src='/images/avatar.png' alt = 'avatar'/>
                    </div>
                    <div className='nfo'>
                    <div><span>username: </span>{user.username}</div>
                    <div><span>full name: </span>{user.name}</div>
                    <div><span>email: </span>{user.email}</div>
                    <div><span>website: </span>{user.website}</div>
                    <br/>
                    {this.setCompanyDetails()}
                    </div>
                </div>
            </div>
        )
    }
}

export default User;