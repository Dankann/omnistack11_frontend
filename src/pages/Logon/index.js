import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';
import api from '../../services/api';

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Logon() {
    const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogon(e) {
        e.preventDefault();
        const data = { id };

        try {
            const response = await api.post('sessions', data);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }
        catch {
            alert('Flaha no login');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="logo" />
                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImage} alt="heroes" />
        </div>
    );
}