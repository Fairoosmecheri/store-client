import React from 'react'
import { Route } from 'react-router-dom'
import UserHome from './UserHome'
function User() {
    return (
        <div>
            <Route path='/'>
                <UserHome />
            </Route>
        </div>
    )
}

export default User
