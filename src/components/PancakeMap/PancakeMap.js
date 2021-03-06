import React, { Component } from 'react';

class PancakeMap extends Component{

state={};


    componentDidMount() {

        navigator.geolocation.getCurrentPosition(position=>{

            this.setState({
                lt: position.coords.latitude,
                lg: position.coords.longitude
            })
          
        });

    }

    render(){


    
    return (
        <div className="home-div">
            <h2 className="page-title">Pancake Map</h2>
            <p>By allowing location services, this page will show local pancake offerings near you!</p> 
            {this.state.lt && 
            <iframe title="LocalPancakes" id="map-div"
                src={'https://www.google.com/maps/embed/v1/search?key=AIzaSyCuA0YFT_ZYpmTiFzz1w5pYCheWlFCsebY&center='+this.state.lt+','+this.state.lg+'&q=Pancakes&zoom=13'}>
            </iframe>
    }
        </div>
    )
}
}

export default PancakeMap