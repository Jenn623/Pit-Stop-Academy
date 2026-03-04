import { useState } from "react"
import LegendsCard from "../Components/LegendsCard"
import MainSection from "../Components/MainSection"
import LegendModal from "../Components/LegendModal"
import legendsData from "../data/legendsData"

function TheLegends(){

    /* lógica para abrir los modales */
    const [selectedLegend, setSelectedLegend] = useState(null);
    const [showModal, setShowModal] = useState(false);

    /* función para el manejo de la lógica del modal */
    const handleLegendClick = (legend) => {
        setSelectedLegend(legend);
        setShowModal(true);
    };

    return (
        <>
            <div className="vipRoom">
                {/* contenedor de la página */}
                <div className="container py-5 text-center">
                    {/* hero/main section aca */}
                    <MainSection title="LEYENDAS QUE NUNCA SE APAGAN"
                        description="La F1 es velocidad, pero también es corazón. 
                        Aquí recordamos a los valientes que dejaron una huella imborrable en el asfalto. 
                        Aunque ya no corren con nosotros, su motor sigue sonando en la memoria de cada fan">
                    </MainSection>

                    {/* grid del pasillo de honor */}
                    <div className="row justify-content-center g-4">
                        {legendsData.map((legend) => (
                            <div key={legend.id} className="col-12 col-md-6 col-lg-3">
                                <LegendsCard
                                legend={legend}
                                onClick={handleLegendClick}>
                                </LegendsCard>
                            </div> 
                        ))}
                    </div>
                </div>
                {/* sección del modal para cada piloto */}
                <LegendModal show={showModal} handleClose={() => setShowModal(false)} legend={selectedLegend}></LegendModal>
            </div>
        </>
    )
}

export default TheLegends