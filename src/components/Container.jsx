import React, { Component } from 'react'
import Routes from '../routes'
import Header from '../components/Header'
import { getTodos } from "../services/todos";

export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            todos: []
        }
    }

    async componentDidMount() {
        try {
            const todos = await getTodos()
            this.setState({ todos })
        } catch(error) {
            console.error(error)
        }
    }

    addTodo = todo => this.setState({ todos: [...this.state.todos, todo] })

    setUser = user => this.setState({ user })

    clearUser = () => this.setState({ user: null })

    render() {
        const { user, todos } = this.state
        return (
            <div>
                <Header user={user} />
                <main className="container">
                    <Routes
                        todos={todos}
                        user={user}
                        setUser={this.setUser}
                        addTodo={this.addTodo}
                        clearUser={this.clearUser}
                    />
                </main>
            </div>
        )
    }
}
