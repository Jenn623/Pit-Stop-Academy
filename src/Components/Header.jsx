import '../styles/Header.css'

function Header (){

    return(

        <>
            {/*propiedad navbar para conseder los atributos navbar de bootstrap, es el contenedor principal*/}
            <nav className='navbar justify-content-center'>
                {/*debe contener dentro una propiedad container-fluid para que no pegue con los bordes*/}
                <div className='container-fluid'>
                    <div className='f1-logo '>
                        <img src="../src/assets/images/f1-logo.svg" alt="Logo F1" />
                    </div>
                    {/*navbar-nav es el contenedorn de los enlaces*/}
                    <div className='navbar-nav '>
                        <ul className='nav'>
                            <li className='nav-item mr-2'>
                                {/*nav-link vuielve un enlace y le da la propiedad de bootstrap*/}
                                <a href="" className='nav-link customFont'>Inicio</a>
                            </li>
                            <li className='nav-item mr-2'>
                                <a href="" className='nav-link customFont'>¿Qué es?</a>
                            </li>
                            <li className='nav-item mr-2'>
                                <a href="" className='nav-link customFont'>Escuderías y Pilotos</a>
                            </li>
                            <li className='nav-item mr-2'>
                                <a href="" className='nav-link customFont'>Circuitos</a>
                            </li>
                            <li className='nav-item mr-2'>
                                <a href="" className='nav-link customFont'>Glosario</a>
                            </li>
                            <li className='nav-item mr-2'>
                                <a href="" className='nav-link customFont'>Las Leyendas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header