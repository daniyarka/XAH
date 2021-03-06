import React, { Component } from 'react';
import './login.css';
import { Link } from "react-router-dom";
import * as userActions from "../../actions/userActions";
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userLoginFetch(this.state)
    }

    render() {
        return (
            <div className="container">
                <section className="space-sm">
                    <div className="container align-self-start">
                        <div className="row mb-5">
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-7">
                                <div className="card card-lg text-center">
                                    <div className="card-body">
                                        <div className="mb-5">
                                            <h1>Авторизация пользователя</h1>
                                            <span>Войдите в свой аккаунт для продолжения</span>
                                        </div>
                                        <div className="row no-gutters justify-content-center">
                                            <form onSubmit={this.handleSubmit} className="text-left col-lg-8 dark-form">
                                                <div className="form-group">
                                                    <label>Имя пользователя</label>
                                                    <input
                                                        name='username'
                                                        value={this.state.username}
                                                        onChange={this.handleChange}
                                                        className="form-control form-control-lg" id="login-username"
                                                        placeholder="Имя пользователя" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Пароль</label>
                                                    <input
                                                        name='password'
                                                        value={this.state.password}
                                                        onChange={this.handleChange}
                                                        className="form-control form-control-lg" id="login-password"
                                                        placeholder="Введите пароль" />
                                                    <small>Забыли пароль? <p>Сбросить</p>
                                                    </small>
                                                </div>
                                                <div>
                                                    <div className="custom-control custom-checkbox align-items-center">
                                                        <input type="checkbox" className="custom-control-input" value="box-1" name="box-1"></input>
                                                        <label className="custom-control-label text-small">Запомнить меня</label>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <button type="submit" className="btn btn-lg btn-primary btn-block">Войти</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span className="text-small">Нет аккаунта? <Link to={'./registration'}><p href="#">Зарегистрироваться</p></Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userActions.userLoginFetch(userInfo))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);