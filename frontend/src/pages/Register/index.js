import React, { useState}  from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        console.log(name);

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try{
            const response = await api.post('/ongs', data);

            alert(`OK ${response.data.id}`);

            history.push('/');
        }catch{
            alert('error');
        }
        
    }

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
                <form onSubmit={handleRegister}>
                    <input placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    ></input>

                    <div className="input-group">
                        <input placeholder="City" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">OK</button>
                </form>
            </div>
        </div>
    )
}