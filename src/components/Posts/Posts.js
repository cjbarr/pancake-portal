import React, { Component } from 'react';



class Posts extends Component {
    state= {posts:['Posts are currently under construction!', "I'm an example post!"]}
    

    

    handleChange = (event, typeOf) => {
        this.setState({
            [typeOf]: event.target.value
            
        })
    }
    
    postSubmit =(event)=>{
        this.setState({
            posts:[...this.state.posts, this.state.text],
            text:''
        })
    }

     render(){
    return (
        <div className="home-div">
            <h2 class="page-title">Pancake Posts Page</h2>
            <textarea placeholder="Write your post here:" rows="4" cols="50" className="post-input" value={this.state.text} onChange={(event) => this.handleChange(event, 'text')} />
       <br></br>
        <button id="post-btn" onClick={this.postSubmit}>Post</button>

        {this.state.posts!==[] &&
            <ul>{this.state.posts.map(post=><li className="post-div">{post}</li>)}</ul>
     }
        </div>
    )
}
}

export default Posts