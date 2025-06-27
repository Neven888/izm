import React from "react";

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center">Prijava</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">Korisničko ime</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Unesite korisničko ime"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Lozinka</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Unesite lozinku"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Prijavi se
                                </button>
                            </form>
                            <p className="text-center mt-3">
                                Nemate račun? <a href="/register">Registrirajte se</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Login;