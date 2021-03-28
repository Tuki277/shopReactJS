import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginRequest } from './../../actions/index'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login: null,
            token: null,
            account: '',
            password: '',
            post: null
        }
    }

    componentWillReceiveProps () {
        console.log('run')
        this.check();
        console.log(this.state)
    }

    componentDidMount () {
        this.check()
    }

    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
    }

    onSave = (event) => {
        event.preventDefault()
        var { account, password } = this.state
        var data = {
            account: account,
            password: password
        }
        this.props.login(data)
        this.check()
    }

    check = () => {
        let token = JSON.parse(localStorage.getItem('key'))
        console.log(token)
        if ( token && token.login) {
            this.setState({
                login: true,
                token: token
            })
        }
    }

    onSaveText = (event) => {
        event.preventDefault()
        let token = "Bearer " + this.state.token.token
        console.log(token)
        let config = {
            headers: {
                Authorization: token
            }
        }
        axios.post("http://localhost:1000/api/posts", {
            post: this.state.post
        }, config).then(res => {
            console.log('router protected', res)
        }).catch(err => {
            console.log(err)
        }) 
    }

    render() {
        return (
            <div>
                {
                    !this.state.login?
                    <div className="container">
                        <div className="limiter">
                            <div className="container-login100">
                                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                                    <form className="login100-form" method="POST" onSubmit={this.onSave}>
                                        <span className="login100-form-title p-b-33">
                                            Account Login
                                        </span>
                                        <div className="wrap-input100">
                                            <input
                                                className="input100"
                                                type="text"
                                                name="account"
                                                placeholder="account"
                                                value = { this.state.username }
                                                onChange = { this.onChange }
                                            />
                                            <span className="focus-input100-1" />
                                            <span className="focus-input100-2" />
                                        </div>
                                        <div className="wrap-input100">
                                            <input
                                                className="input100"
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value = { this.state.password}
                                                onChange = { this.onChange }
                                            />
                                            <span className="focus-input100-1" />
                                            <span className="focus-input100-2" />
                                        </div>
                                        <div className="container-login100-form-btn m-t-20">
                                            <button className="login100-form-btn" type ="submit">
                                                Sign in
                                        </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="container">
                        <form onSubmit={this.onSaveText}>
                            <div className="form-group">
                            <label> add post </label>
                            <textarea 
                                className="form-control" 
                                name="post" id="" 
                                rows="3"
                                onChange={ this.onChange }
                                value = { this.state.post }
                            ></textarea>
                            <button className="login100-form-btn" type ="submit">
                                Post
                            </button>
                            </div>
                        </form>
                    </div>

                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        login : (data) => {
            dispatch(loginRequest(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)