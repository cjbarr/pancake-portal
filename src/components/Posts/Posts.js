import React, { Component } from 'react';
import { connect } from 'react-redux';



class Posts extends Component {
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
        this.setState({
            posts:[...this.state.posts, this.state.text],
            text:''
        })
    }
    }

    postTest=(event)=>{
        this.props.dispatch({
            type:"TEST"
        })
    }

     render(){
    return (
        <div className="home-div">
            <h2 class="page-title">Pancake Posts Page</h2>
            <textarea id="textarea" placeholder="Write your post here:" rows="4" cols="50" className="post-input" value={this.state.text} onChange={(event) => this.handleChange(event, 'text')} />
       <br></br>

       <button onClick={this.postTest}>TESt</button>
        <button id="post-btn" onClick={this.postSubmit}>Post</button>

        {this.state.posts!==[] &&
            <ul>{this.state.posts.map(post=><li className="post-div">{post}</li>)}</ul>
     }
        </div>
    )
}
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Posts);