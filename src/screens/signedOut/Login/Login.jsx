import React, { Component } from 'react'
import { logIn } from '../../../services/auth'
// import Layout from '../../../components/Layout'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
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

    onSignIn = event => {
        event.preventDefault()

        const { history, setUser } = this.props
        logIn(this.state)
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error);
                this.setState({
                    isError: true,
                    errorMsg: 'Invalid Credentials',
                    username: '',
                    password: ''
                })
                
            })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger': ''
        if(this.state.isError) {
            return (
                <button type='submit' className={`is-${toggleForm} button submit-button`}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <button className='button is-white is-outlined submit-button is-large' type="submit">Sign In</button>
        }
    }

    render() {
        const { username, password } = this.state

        return (
        
            <div className='container'>
                <div className='form-container' id='login'>
                    <div className='sign-in'>
                        <h2 className='signInTitle is-size-1'>SIGN IN</h2>
                    </div>
                    <form className='placeholder-login login-form is-family-secondary' onSubmit={this.onSignIn}>
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
                        <label className='is-size-4'>Password</label>
                        <input
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Enter Password'
                            onChange={this.handleChange}
                            className="input is-rounded is-large has-text-centered is-family-secondary"
                        />
                        {this.renderError()}
                    </form>
                </div>
            </div>
        )
    }
}
