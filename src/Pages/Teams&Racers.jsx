import MainSection from "../Components/MainSection"
import TeamCarousel from "../Components/TeamCarousel"

function TeamsRacers(){

    return (

        <>
        <div className="pt-4 mt-5">
            <MainSection
            title="¿Quién es Quién en la Pista?"
            description="Te presento a la Parrila. Aquí es donde se arman los equipos. Hay 11 escuderías y cada una tiene 2 pilotos estrela. ¡Elige a tu starter!">
            </MainSection>
        </div>
        <div className="pt-5">
            <TeamCarousel></TeamCarousel>
        </div>
        </>
    )
}

export default TeamsRacers