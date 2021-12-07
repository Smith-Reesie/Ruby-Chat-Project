import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <>
            <NavLink
        to="/" exact > Home
        </NavLink>
        <NavLink
        to="/chat" exact > Chat
        </NavLink>

        </>
    )
}

export default NavBar
