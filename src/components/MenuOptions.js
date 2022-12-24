import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function MenuOpcoes() {

    const navigate = useNavigate();
    const logoff = () => {
        sessionStorage.removeItem("login")
        navigate("/")
    }
    return (
        <div className='menu'>
            <Link to="/menu">
                <button className='itemMenu'>Home</button>
            </Link>
            <Link to="/films">
                <button className='itemMenu'>Filmes</button>
            </Link>
            <Link to="/people">
                <button className='itemMenu'>Personagens</button>
            </Link>
            <Link to="/planets">
                <button className='itemMenu'>Planetas</button>
            </Link>
            <Link to="/species">
                <button className='itemMenu'>Espécies</button>
            </Link>
            <Link to="/starships">
                <button className='itemMenu'>Naves</button>
            </Link>
            <Link to="/sobre">
                <button className='itemMenu'>Sobre</button>
            </Link>
            <Link to="/duvidas">
                <button className='itemMenu'>Dúvidas</button>
            </Link>
            <button className='itemMenu' onClick={logoff}>Sair</button>
        </div>


    )
}