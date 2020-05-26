import React from 'react'
import Layout from '../../../components/Layout'

export default function Todos(props) {
    const { history, match, user, todos } = props
    const renderButton = id => {
        if(user) {
            return (
                <button onClick={() => history.push(`${match.url}/${id}`)}>
                    See More
                </button>
            )
        } else {
            return null
        }
    }

    const renderTodos = () => {
        if(todos) {
            return todos.map(todo => {
                return (
                    <div className="todo" key={todo.id}>
                        <h2 className="title">{todo.title}</h2>
                        <p className="subtitle">{todo.completed ? 'Todo is completed!' : 'Not complete' }</p>
                        {renderButton(todo.id)}
                    </div>
                )
            })
        } else {
            return null
        }
    }
    if(user) {
        return (
            <Layout>
                <h2 className="title">All Todos</h2>
                {!todos ? <h3>No Todos Currently</h3> : null}
                <div className="todo-container">{renderTodos()}</div>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <h1 className="title">Welcome to To Do Manager</h1>
                <div>
                    {!todos ? <h3>No Todos currently. Sign in or create an account to begin</h3> : null }
                    <div className="todo-container">{renderTodos()}</div>
                </div>
                {/* <NavLink to='sign-up'>
                    <Button title='Create Account' className='create-button' />
                </NavLink>

                <NavLink to='sign-in' className='sign-in'>
                    SIGN IN
                </NavLink> */}
            </Layout>
        )
    }

}
