import React from 'react';
import './styles.css'
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile(){
    const ongName = localStorage.getItem('ongName');

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} />
                <span>Welcome, {ongName}</span>
                <Link to="/incidents/new" className="button">New incident</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Incidents</h1>
            <ul>
                <li>
                    <strong>Incident</strong>
                    <p>Test</p>
                    <strong>Description:</strong>
                    <p>XYZ skt test</p>
                    <strong>Value:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Incident</strong>
                    <p>Test</p>
                    <strong>Description:</strong>
                    <p>XYZ skt test</p>
                    <strong>Value:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>

                <li>
                    <strong>Incident</strong>
                    <p>Test</p>
                    <strong>Description:</strong>
                    <p>XYZ skt test</p>
                    <strong>Value:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Incident</strong>
                    <p>Test</p>
                    <strong>Description:</strong>
                    <p>XYZ skt test</p>
                    <strong>Value:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>
    )
}