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
                <button type='submit' className={`is-${toggleForm} button submit-button`}>
                    {this.state.errorMsg}
                </button>
            )
        }
    }



    render() {
        const { username, email, password } = this.state
        return (
            <div className='form-container'>
                <h1 className="signInTitle is-size-1">SIGN UP</h1>
                <form className='join-form is-family-secondary' onSubmit={this.onSignUp}>
                    <label className='is-size-4'>Username</label>
                    <input
                        required
                        type='text'
                        name='username'
                        value={username}
                        placeholder='Enter Username'
                        onChange={this.handleChange}
                        className="input is-rounded is-large has-text-centered is-family-secondary"
                    />
                    <label className='is-size-4'>Email Address</label>
                    <input
                        required
                        type='text'
                        name='email'
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        value={email}
                        placeholder='Enter E-mail'
                        onChange={this.handleChange}
                        className="input is-rounded is-large has-text-centered is-family-secondary"
                    />
                    <label className='is-size-4'>Password</label>

                    <input
                        required
                        type='text'
                        name='password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        value={password}
                        placeholder='Enter Password'
                        onChange={this.handleChange}
                        className="input is-rounded is-large has-text-centered is-family-secondary"
                    />
                    <h6 className="is-size-6 has-text-warning">Password must contain 8 or more characters<br></br>(At least one number, one uppercase and lowercase letter)</h6>
                    <div className="button-container">
                        <button className='button is-white is-outlined submit-button is-large' type="submit">Create Account</button>
                    </div>
                    {this.renderError()}
                </form>
            </div>
        )
    }
}

