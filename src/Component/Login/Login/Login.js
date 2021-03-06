import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';
import { useState } from "react";
import useFirebase from '../../hooks/useFirebase';




const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const {
        handleGithubLogin,
    } = useFirebase();
    return (
        <div className="div d-flex justify-content-center align-items-center my-5">
            <div className="row ">
                <div className="col-md-6">
                    <div>
                        <div className="form-input mt-5">
                            <input

                                className="mt-2 p-2"
                                type="email"
                                placeholder="Email"
                            />
                            <br />
                            <input

                                className="mt-2 p-2"
                                type="password"
                                placeholder="Password"
                            />
                            <br />
                            <div className="login-regiater-btn mt-4">
                                <button

                                    className="btn btn-dark me-1"
                                >
                                    Register
                                </button>
                                <button className="btn btn-secondary shadow ms-1">
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className="login-btn mt-4">
                            <button
                                onClick={signInUsingGoogle}
                                className="btn btn-secondary shadow m-2"
                            >Google sign in
                            </button>
                            <button onClick={handleGithubLogin} className="btn btn-dark m-2">
                                Github sign in
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-side-image">
                        <img
                            className="w-100"
                            src="https://i.ibb.co/MSBbLcd/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credential.jpg"
                            alt=""
                        />
                    </div>
                    ;
                </div>
            </div>
        </div>
    );
};

export default Login;