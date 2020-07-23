import React, { Component } from 'react';



class Posts extends Component {
    state= [
    ]

    

    handleChange = (event, typeOf) => {
        console.log(event.target.value, typeOf);
        this.setState({
            ...this.state,
            [typeOf]: event.target.value
            
        })
    }
    
    postSubmit =(event)=>{
    console.log(this.state)
        this.setState({
            ...this.state,
            published: this.state.post,
            post:''
        })
    }

     render(){
    return (
        <>
            <h2 class="page-title">Pancake Posts Page</h2>
            <label htmlFor="postInput">Write your post here: </label>
            <input id="postInput" value={this.state.post} onChange={(event) => this.handleChange(event, 'post')} />
        <button onClick={this.postSubmit}>Post</button>

        {/* {this.state!==[] &&
            <div>{this.state}</div>
     } */}
        </>
    )
}
}

export default Posts