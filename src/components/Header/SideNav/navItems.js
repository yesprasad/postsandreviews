import React from 'react'
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

/**
 * Currently the side navigation bar has only one item with home.
 * We can enhance this when we get Authentication for the user,
 * show posts of the current logged in user
 * Allow the logged in user to create a new post or make a new comment.
 * However, our current assignment is all about reading data from service.
 */
const Items = [
    {
        type: 'navItem',
        icon:'home',
        link:'/',
        text:'Home'
    }
]

const element = (item, idx) => {
    return (
        <div key={idx} className={item.type}>
        <Link to={item.link} style={{color: '#ffffff',padding: '5px'}}>
            <FontAwesome name={item.icon} />
            {item.text}
        </Link>
        </div>
    )
}
const showItems = () => {
    return Items.map((item, idx) => {
        return element(item, idx);
    })
}

const NavItems = () => {
    return(
        <div>
            {showItems()}
        </div>
    )
}

export default NavItems;