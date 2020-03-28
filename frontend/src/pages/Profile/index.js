import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} />
                <span>Welcome, skater</span>
                <Link to="/incidents/new" className="button">New incident</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
        </div>
    )
}