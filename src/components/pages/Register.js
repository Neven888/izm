import React from "react";

const Register = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center">Registracija</h2>
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
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Unesite email"
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
                                    Registrujte se
                                </button>
                            </form>
                            <p className="text-center mt-3">
                                Već imate račun? <a href="/login">Prijavite se</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Register;