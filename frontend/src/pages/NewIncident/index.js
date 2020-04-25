import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo"></img>
                    <h1>Submit new incident</h1>
                    <p>
                        Detail the incident
                </p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size="16" color="#E02041 " />
                    Sign Up
                </Link>
                </section>
                <form>
                    <input placeholder="Title" />
                    <textarea placeholder="Description" />
                    <input placeholder="Value" />

                    <button className="button" type="submit">OK</button>
                </form>
            </div>
        </div>
    );
}