import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
return(
    <nav>
        <ul className="nav">
            <li><Link className="nav-item" to='/'>Pancake Home</Link></li>
            <li><Link className="nav-item" to='/PancakeRecipes'>Pancake Recipes</Link></li>
            <li><Link className="nav-item" to='/PancakePosts'>Pancake Posts</Link></li>
            <li><Link className="nav-item" to='/PancakePictures'>Pancake Pictures</Link></li>
            <li><Link className="nav-item" to='/PancakeMap'>Pancake Map</Link></li>
            <li><Link className="nav-item" to='/PancakePals'>Pancake Pals</Link></li>
        </ul>

    </nav>

)





}

export default NavBar