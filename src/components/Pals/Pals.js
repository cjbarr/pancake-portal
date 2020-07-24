import React, { Component } from 'react';



class Pals extends Component {

    state = {
        pals: [{ name: 'Corey', picture: '/images/corey.jpg', about:'Corey loves making pancakes, and is a junior software developer based out of the Twin Cities. This is a silly page he created during COVID-19.' },
            { name: 'Ashley', picture: '/images/Ashley.jpg', about:"Ashley is my wife! She's more of a savory breakfast person, and a project manager at a design agency. But that doesn't mean she can't enjoy a good pancake!"  },
        { name: 'Podrick', picture: '/images/podrick.jpg', about:"Podrick is our corgi puppy, he loves to bork at random noises, and is named after Podrick in Game of Thrones, the most loyal of squires." },
        { name: 'Hamlet', picture: '/images/hamlet.jpg', about: "I adopted Hamlet in college, and he lived with my parents when I was stationed on ships and couldn't have a pet. One of the sweetest cats I've met and Pod's best friend." }
]
}
    render(){
    return (
        <div className="home-div">
        <h2 class="page-title">Pancake Pals AKA Who We Are</h2>
    
            <div>{this.state.pals.map(pal => <div className="pals-layout"><p className="pal-name">{pal.name}</p><br></br><img className="pal-picture" src={pal.picture} alt={pal.picture}/><br></br><p className="pal-about">{pal.about}</p></div>)}</div>
  
    
    </div>
    )
}
}

export default Pals