import React, { Component } from 'react';
import Corey from '../../Images/corey.jpg'



class Pals extends Component {

    state = {
        pals: [{ name: 'Corey', picture: '/images/corey.jpg' },
            { name: 'Ashley', picture: '/images/Ashley.jpg' },
        { name: 'Podrick', picture: '/images/podrick.jpg' },
        { name: 'Hamlet', picture: '/images/hamlet.jpg' }
]
}
    render(){
    return (
        <>
        <h2 class="page-title">Pancake Pals Page</h2>
    <div>{this.state.pals.map(pal=><div className="pals-layout"><img className="pal-picture" src={pal.picture} alt={pal.picture}/><br></br>{pal.name}</div>)}</div>
  
    
    </>
    )
}
}

export default Pals