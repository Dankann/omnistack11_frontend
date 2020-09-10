import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import logoImage from '../../assets/logo.svg';
import './styles.css';

export default function Logon() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be the hero" />
                    <h1>Register</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Fazer logon
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}