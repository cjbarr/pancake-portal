import React, { Component } from 'react';

class Recipes extends Component {
    state = {math:1}
    

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            input: event.target.value

        })
    }

    submit = (event) => {
        this.setState({
            math:this.state.input 
        })
        console.log('submit')
    }


    render(){
    return (
        <div className="home-div">
        <h2 class="page-title">Pancake Recipes</h2>

        <p>The title of this page is a bit misleading--truth be told there is only one recipe here, you can just adjust the amount to provide multiple recipes.</p>
        <p>The reason I've only listed one recipe is simple: You don't need another! I ate this recipe everday for an entire summer in college, often as my only meal. Sometimes I had it plain, sometimes I mushed up a bannana, added fruit, maybe even some chocolate chips. It has never done me wrong, and I hope it works well for you too!</p>
        <div className="recipe-div">
                <h3>The Pancake Recipe:</h3>
                <h4>A single batch makes 4 large pancakes</h4>

        <ul>
            <h3>Pancake Calculator!</h3> 
                <label htmlFor="servings">How many batches you want: </label>
                <input type="number" id="servings" placeholder="X times 4 Pancakes" onChange={(event) => this.handleChange(event)} />
                <button onClick={()=>this.submit()}>Calculate</button>
                <br></br>
                <br></br>
                {this.state.math &&
                <div>
                    <li>{this.state.math * 1.5} Cups Flour</li>
                    <li>{this.state.math *1} Tablespoon(s) Sugar</li>
                        <li>{this.state.math * 3.5} Teaspoons Baking Powder</li>
                        <li>{this.state.math * 1} Egg(s)</li>
                        <li>{this.state.math * 3} Tablespoons Melted Butter</li>
                        <li>{this.state.math * 1.25} Cups Milk</li>
                </div>
               }
        </ul>
            <h4>Preparation</h4>
            <p>Mix your dry, then add in your wet and combine until mostly uniform. Should be runny and easy to ladel onto a hot pan! Add in whatever other ingredients you feel like, it's an amazing base!</p>
        </div>

        </div>
    )
}
}

export default Recipes