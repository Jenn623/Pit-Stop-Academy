import '../styles/TeamCard.css'

function TeamCard({imgTeam, nameTeam}){

    return(

        
        <>
        {/* este es el componente que se encarga solamente de renderizar el contenido de una tarjeta de equipo*/}
            <div className="img-team">
                <img src={imgTeam} alt="logo del equipo" className='icon-container'/>
                <h5 className="teamName justify-content-center"> {nameTeam} </h5>
            </div>
        </>
    )
}

export default TeamCard