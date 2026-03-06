// 1. Importamos NavLink en lugar de Link
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <>
            <nav className='navbar justify-content-center sticky-top f1-navbar pt-4'>
                <div className='container-fluid justify-content-evenly'> 
                    
                    {/* el logo redirige tambien al inicio */}
                    <div className='navbar-brand f1-logo'>
                        <NavLink to="/">
                            <img src="/f1-logo.svg" alt="Logo F1" />
                        </NavLink>
                    </div>
                    
                    <div className='navbar-nav'>
                        <ul className='nav'>
                            {/* etiquetas con sus direcciones respectivas */}
                            <li className='nav-item mr-2'>
                                <NavLink to="/" className='nav-link customFont'>Inicio</NavLink>
                            </li>
                            <li className='nav-item mr-2'>
                                <NavLink to="/WhatIsF1" className='nav-link customFont'>¿Qué es?</NavLink>
                            </li>
                            <li className='nav-item mr-2'>
                                <NavLink to="/Teams&Racers" className='nav-link customFont'>Escuderías y Pilotos</NavLink>
                            </li>
                            <li className='nav-item mr-2'>
                                <NavLink to="/WorldWideCircuits" className='nav-link customFont'>Circuitos</NavLink>
                            </li>
                            <li className='nav-item mr-2'>
                                <NavLink to="/Glossary" className='nav-link customFont'>Glosario</NavLink>
                            </li>
                            <li className='nav-item mr-2'>
                                <NavLink to="/TheLegends" className='nav-link customFont'>Las Leyendas</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;