import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo"></img>
                    <h1>Sign Up</h1>
                    <p>
                        Input your data to request your register
                    </p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size="16" color="#E02041 " />
                        Sign Up
                    </Link>
                </section>
                <form>
                    <input placeholder="Name" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp"></input>

                    <div className="input-group">
                        <input placeholder="City" />
                        <input placeholder="UF" style={{width: 80}} />
                    </div>

                    <button className="button" type="submit">OK</button>
                </form>
            </div>
        </div>
    )
}