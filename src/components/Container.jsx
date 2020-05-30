import React, { Component } from 'react'
import Routes from '../routes'
import Header from '../components/Header'
import { getTodos } from "../services/todos";
import './styles/Container.scss'

export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            todos: [],
            date: ''
        }
    }

    async componentDidMount() {
        let currentDate = new Date()
        let formattedDate = currentDate.toLocaleDateString()
        // console.log(currentDate.toLocaleDateString())
        try {
            const todos = await getTodos()
            this.setState({ 
                todos,
                date: formattedDate
            })
        } catch(error) {
            console.error(error)
        }
    }


    addTodo = todo => this.setState({ todos: [...this.state.todos, todo] })

    setUser = user => this.setState({ user })

    clearUser = () => this.setState({ user: null })

    render() {
        const { user, todos, date } = this.state
        return (
            <div>
                <Header className='has-background-primary' user={user} date={date} />
                <main className="container has-text-white">
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
