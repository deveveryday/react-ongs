import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"></img>

                <form>
                    <h1>SignIn</h1>
                    <input placeholder="Ong ID"/>
                    <button type="submit" className="button">Go</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size="16" color="#E02041 " />
                        Sign Up
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes"></img>
        </div>
    );
}