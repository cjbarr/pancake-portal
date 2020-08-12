import React, { Component } from 'react';
import { connect } from 'react-redux';



class Posts extends Component {

componentDidMount = ()=>{
    this.getPosts();
}
    state= {
        posts:['Posts are currently under construction!', "I'm an example post!"],
        text:''
    }
    

    

    handleChange = (event, typeOf) => {
        this.setState({
            [typeOf]: event.target.value
            
        })
    }
    
    postSubmit =(event)=>{
        if(this.state.text===''){
            alert('Post cannot be blank')
        };
        if(this.state.text !==''){
            this.props.dispatch({
                type: 'POST',
                payload: {
                    text: this.state.text
                }
            })
            this.setState({
            text:''
        })
    }
    }

    getPosts=()=>{
            this.props.dispatch({
                type: 'GET_POSTS',
            })
        }
    

     render(){
    return (
        <div className="home-div">
            <h2 className="page-title">Pancake Posts Page</h2>
            <textarea id="textarea" placeholder="Write your post here:" rows="4" cols="50" className="post-input" value={this.state.text} onChange={(event) => this.handleChange(event, 'text')} />
       <br></br>
        <button id="post-btn" onClick={this.postSubmit}>Post</button>

            {this.props.reduxState.postReducer &&
                <ul>{this.props.reduxState.postReducer.map(post => <li key={post.id} className="post-div">{post.text}</li>)}</ul>
            }
        </div>
    )
}
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Posts);