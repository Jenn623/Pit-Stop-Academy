import MainSection from "../Components/MainSection"
import TeamCarousel from "../Components/TeamCarousel"
import TeamModal from "../Components/TeamModal"
import { useState } from "react"

function TeamsRacers(){

    //estados para el manejo de los modales de la página

    // estado que hace que se muestre o no el modal
    const[showWodal, setShowModal] = useState(false);

    //estado que "carga" la información del modal seleccionado
    const[selectedTeam, setSelectedTeam] = useState(null);

    //función que carga la informacion del equipo seleccionado en el modal
    const handleTeamClick = (team) =>{
        setSelectedTeam(team); // carga la información del equipo directamente del array de equipos
        setShowModal(true); // muestra el modal
    };

    //función que permite cerrar el modal
    const handleCloseModal = () =>{
        setShowModal(false);
        setSelectedTeam(null);
    };

    return (

        <>
        <div className="pt-4 mt-5">
            <MainSection
            title="¿Quién es Quién en la Pista?"
            description="Te presento a la Parrila. Aquí es donde se arman los equipos. Hay 11 escuderías y cada una tiene 2 pilotos estrela. ¡Elige a tu starter!">
            </MainSection>
        </div>
        <div className="pt-5">
            <TeamCarousel onTeamClick={handleTeamClick}></TeamCarousel>
            <TeamModal show={showWodal} handleClose={handleCloseModal} teamsData={selectedTeam}></TeamModal>
        </div>
        </>
    )
}

export default TeamsRacers