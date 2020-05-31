import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import TodoForm from '../../../components/TodoForm'
import Layout from '../../../components/Layout'
import { createTodo } from "../../../services/todos";
import Nav from '../../../components/Nav';

class CreateTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: {
                title:'',
                date: ''
            },
            createdTodo: null
        }
    }
    handleDate = date => {
        let stringDate = JSON.stringify(date)
        console.log(stringDate);
        
        this.setState(prevState => ({
            todo: {...prevState.todo, date: date}
        }))
    }

    handleTitle = event => {
        console.log(event.target.value);
        
        this.setState({ 
            todo: {
                [event.target.name]: event.target.value
            }
        })
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            todo: { ...prevState.todo, [name]: value }
        }))
    }
    handleSubmit = event => {
        console.log(this.state.todo)
        event.preventDefault()
        this.props.addTodo(this.state.todo)
        createTodo(this.state.todo)
            .then(res => 
                res.status === 201
                ? this.setState({ createdTodo: res.data.todo })
                : null
            )
            .catch(console.error)
    }
    render() {
        // console.log(typeof(this.state.todo.date));

        const { handleChange, handleSubmit, handleDate, handleTitle } = this
        const { createdTodo, todo } = this.state
        const { history } = this.props
        if(createdTodo) {
            return <Redirect to={`/todos`} />
        }
        return (
            <Layout>
                <Nav/>
                <TodoForm
                    todo={todo}
                    history={history}
                    handleDate={handleDate}
                    handleTitle={handleTitle}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath='/todos'
                />
            </Layout>
        )
    }
}

export default CreateTodo