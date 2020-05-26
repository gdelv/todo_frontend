import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home/Home'
import Login from '../screens/Login/Login'
import Join from '../screens/Join/Join'

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/join' component={Join} />
            </Switch>
        </>
    )
}