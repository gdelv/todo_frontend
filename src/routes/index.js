import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/signedIn/Home/Home'
import Login from '../screens/signedOut/Login/Login'
import Join from '../screens/signedOut/Join/Join'
import Landing from '../screens/signedOut/Landing/Landing'
import SignOut from '../screens/signedOut/SignOut/SignOut'
import AuthenticatedRoute from './AuthenticatedRoute'
import Todos from '../screens/signedIn/Todos/Todos'
import CreateTodo from '../screens/signedIn/CreateTodo/CreateTodo'

const Routes = ({ user, todos, setUser, clearUser, addTodo }) => {
    return (
            <Switch>
                <Route 
                    exact 
                    path='/' 
                    render={props => (user ? <Home {...props} todos={todos} /> : <Landing/> )} 
                />
                <Route
                    exact
                    path='/sign-in'
                    render={props => <Login  {...props} setUser={setUser} user={user} />}
                />
                <Route
                    exact
                    path='/sign-up'
                    render={props => <Join {...props} setUser={setUser} />}
                />
                <Route
                    exact
                    path='/sign-out'
                    render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
                />
                <AuthenticatedRoute
                    exact
                    path='/todos'
                    user={user}
                    render={props => <Todos {...props} user={user} todos={todos} />}
                />
                <AuthenticatedRoute
                    user={user}
                    path='/create'
                    render={props => <CreateTodo {...props} addTodo={addTodo}/>}
                />
            </Switch>
    )
}

export default Routes