import TeamCard from "./TeamCard"
import teamsData from '../data/teams&racersData.js'
import { Carousel } from "react-bootstrap"
import '../styles/TeamCarousel.css'

function TeamCarousel(){

    return (

        <>
        {/* en este componente se maneja la lógica del componente que funciona como slider y recorre el arreglo */}
        
        {/* con esta clase hacemos que se vuelva un carrusel de fotos de tipo slide */}
        <Carousel className="carousel-slide w-100">
            {/* especificamos el primer item del carrusel, también le decimos que es el primer elemento activo */}
            {teamsData.map((item, index) => (
                <Carousel.Item key={index} className="interval-null">
                    <div className="justify-content-center d-flex">
                        <TeamCard imgTeam={item.teamLogo} nameTeam={item.teamName} className="d-block w-100"></TeamCard>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
        </>
    )
}

export default TeamCarousel    