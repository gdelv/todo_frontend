import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home/Home'

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </>
    )
}