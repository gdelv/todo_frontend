import React, { Component } from 'react'
import { join, logIn } from "../../../services/auth";

export default class Join extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })
    }

    onSignUp = event => {
        event.preventDefault()

        const { history, setUser } = this.props

        join(this.state)
            .then(() => logIn(this.state))
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    email: '',
                    password: '',
                    isError: true,
                    errorMsg: 'Sign Up Details Invalid'
                })
            })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if(this.state.isError) {
            return (
                <button type='submit' className={`is-${toggleForm}`}>
                    {this.state.errorMsg}
                </button>
            )
        }
    }



    render() {
        const { username, email, password } = this.state
        return (
            <div className='form-container'>
                <h1 className="has-text-centered">sign up</h1>
                <form onSubmit={this.onSignUp}>
                    <label>Username</label>
                    <input
                        required
                        type='text'
                        name='username'
                        value={username}
                        placeholder='Enter Username'
                        onChange={this.handleChange}
                    />
                    <label>Email Address</label>
                    <input
                        required
                        type='text'
                        name='email'
                        value={email}
                        placeholder='Enter E-mail'
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input
                        required
                        type='text'
                        name='password'
                        value={password}
                        placeholder='Enter Password'
                        onChange={this.handleChange}
                    />
                    <div className="button-container">
                        <button type="submit">Create Account</button>
                    </div>
                    {this.renderError()}
                </form>
            </div>
        )
    }
}

