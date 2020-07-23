import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBar(){
return(
    <nav>
        <ul class="nav">
            <li><Link class="nav-item" to='/PancakePictures'>Pancake Pictures</Link></li>
            <li><Link class="nav-item" to='/PancakePals'>Pancake Pals</Link></li>
            <li><Link class="nav-item" to='/PancakeRecipes'>Pancake Recipes</Link></li>
            <li><Link class="nav-item" to='/PancakePosts'>Pancake Posts</Link></li>
        </ul>

    </nav>

)





}

export default NavBar