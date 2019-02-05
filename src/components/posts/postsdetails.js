import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class PostDetails extends React.Component {
    state = {
        details: {},
        comments: []
    }
    getPostDetails =  async () => {
        const postDetails = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.Id}`)
        let details = {}

        details['userId'] = postDetails.data.userId;
        details['id'] = postDetails.data.id;
        details['title'] = postDetails.data.title;
        details['body'] = postDetails.data.body;
        this.setState({details: details})
    }

    getPostComments = async () => {
        const comments = await Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.Id}`)
        this.setState({comments: comments.data})
    }
    
    componentWillMount() {
        this.getPostDetails()
        this.getPostComments()
    }

    renderPostComments() {
    if(!this.state.comments) return null;
       return this.state.comments.map(item => {
            return(
                <div key={item.id}>
                    <div className='book_author'><h3>{item.name}</h3></div>
                    <div><strong>commentor email: {item.email}</strong></div>
                    <div><p>{item.body}</p></div>
                </div>
            )          
        })
    }
    render() {
        return(
            <div> 
                <div>
                    <Link to={`/`} className="fa fa-chevron-circle-left" style={{padding:'5px'}}>back</Link>
                </div>
                
                <div className='book_header'>
                    <h2>{this.state.details.title}</h2>
                </div>
                <div className='book_items'>
                    <div className='book_author'><span>Post Created by:</span> {this.props.location.postcreater}</div>
                    <br/>   
                    <div className='book_bubble'>{this.state.details.body}</div>
                </div>
                <br/>
                <br/>
                <h2>Comments on this post:</h2>
                {this.renderPostComments()}
            </div>
        )
    }
}


export default PostDetails;