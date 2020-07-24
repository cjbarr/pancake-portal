import React, { Component } from 'react';



class Home extends Component {

    state = {

    }
    render() {
        return (
            <div className="home-div">
            <h2>Welcome to the Pancake Portal!</h2>
            <div>
                <p>My name is Corey, and I fell in love with the art of pancakes the summer before my final semester in college.</p>
                <img id="home-pancake" src ='/images/pancake.jpg' alt="Pancakes" />
                <p className="caption">This picture was the image on my go-to recipe. When I saw it I knew I was on the right page!</p>
                <p>I lived in an old hotel that only had summer staples (flour, eggs, milk, etc.) and was too broke to buy food. I realized quickly that I could make pancakes for free, and that they were filling, easy to make, and tasted much better when made from scratch than a prepackaged mix.</p>
                <p>Luckily <a href="https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/">this recipe</a> was all I needed.</p>
                <p>Some takeaways that I learned from making hundreds on pancakes from scratch over the years (as well as thousands of pancakes from various mixes when I worked a ship's cook in the U.S. Coast Guard) is that there are two crucial aspects to making good pancakes.</p>
                    <ol>
                        <li>Consistency is key</li>
                        <ul>
                            <li>The mix should not be thick, but not be too runny either</li>
                            <li>It should easily ladle onto a griddle or pan without shaking or pouring</li>
                        </ul>
                        <li>Greasing the pan is contentious</li>
                        <ul>
                            <li>If you love the uniform golden/dark brown pancakes from diners and IHOP, don't grease the pan!</li>
                            <li>Pancakes often have enough grease in them to not stick. If you grease, they will be splotchy and crispy</li>
                        </ul>
                    </ol>
                    <p>I married someone who likes crispy splotchy pancakes, however I prefer fluffy and uniform. To work around this I grease the pan on alternating batches. Every pancake breakfast has both crispy and fluffy pancakes to satisfy our personal tastes.</p>
                    <p>While this website started out as a joke, I truly am passionate about the pancake. Additionally, my wife is Korean and I learned all about the world of savory vegetable pancakes of an amazing amount of variety. There is nothing you cannot pancake! The world is your oyster! </p>
            </div>
               


            </div>
        )
    }
}

export default Home