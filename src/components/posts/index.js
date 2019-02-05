import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'

class AllPosts extends React.Component {
    state = {
        loading:true
    }

    fetchPostsWithUsers() {
        var that = this;
        Axios.all([Axios.get('https://jsonplaceholder.typicode.com/posts'), 
        Axios.get('https://jsonplaceholder.typicode.com/users')])
        .then(Axios.spread(function(psts, usrs) {
            const posts = psts.data;
            const users = usrs.data;
            //merge the two responses such that user details are into the posts array.
            let postsWithUsers = posts.reduce(function(acc, curr) {
                const usr = users.find(usr => usr.id === curr.userId)
                curr['name'] = usr.name
                curr['username'] = usr.username
                curr['email'] = usr.email
                acc.push(curr);
                return acc;
            },[])
            that.setState({postsWithUsers})
        }))
    }

    getAllPosts() {
        if(!this.state.postsWithUsers) return null;
        const posts = this.state.postsWithUsers;
        if(!posts) return(<div>None</div>)
    
        return posts.map(item => {
            
            const postDetails = {
                pathname: `/postsdetails/${item.id}`,
                postcreater: item.name //passing post created user
            }
           return(
            <div className ="br_container" key={item.id}>
            <Link to={postDetails}>
            <div className="br_header">
                <h3>{item.title}</h3>
                <div className="br_reviewer">
                     <span>Created by: </span> <Link to={`/user/${item.userId}`}>{item.name}</Link>
                </div>
            </div>
            </Link>
            </div>
           )
        })
        
    }

    componentDidMount() {
        this.setState({loading:false})
        this.fetchPostsWithUsers()
    }
    render(){
        //if there is a slow connection, we show a spinning loading image to the user
        if(this.state.loading){
            return <div className="loader">Loading...</div>
        }
        return(
            <div>
                {this.getAllPosts()}
            </div>
        )
    }
}

export default AllPosts;