import React from 'react';

function Pictures() {
    return (
        <div className="home-div">
        <h2 class="page-title">Pancake Pictures</h2>
        <div id="pancake-picture-div">
                <img className="pancake-picture" src="/images/pancake1.jpg" alt="Stack of pancakes"/>
                <img className="pancake-picture" src="/images/pancake2.jpg" alt="Stack of pancakes" />
                <img className="pancake-picture" src="/images/pancake3.jpg" alt="Stack of pancakes" />
                <img className="pancake-picture" src="/images/pancake4.jpg" alt="Stack of pancakes" />
        </div>
        </div>
    )
}

export default Pictures