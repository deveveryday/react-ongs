import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', { id });
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }catch(err){
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"></img>

                <form onSubmit={handleLogin}>
                    <h1>SignIn</h1>
                    <input placeholder="Ong ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
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