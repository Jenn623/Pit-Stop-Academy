import MapComponent from "../Components/MapComponent"
import { circuitsData } from "../data/circuitsData";
import CircuitModal from "../Components/CircuitModal";
import '../styles/CircuitModal.css'
import MainSection from "../Components/MainSection";
import { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'

function WorldWideCircuits(){

    /* estdos para el manejo de la muestra del modal y del circuito seleccionado */
    const [showModal, setShowModal] = useState(false);
    const [selectedCircuit, setSelectedCircuit] = useState(null);

    /* funcion para el manejo del circuito seleccionado */
    const handleSelectedCircuit = (circuit) => {
        setSelectedCircuit(circuit);
        setShowModal(true);
    };

    const handleClose = () =>{
        setShowModal(false);
    };
    
    return(


        <>
            <Container className="my-5">
                {/* texto de explicación de los circuitos */}
                <MainSection
                    title="¡El Tour de la Velocidad!"
                    description="¿Qué es un círcuito Imagina una pista de carreras diseñado para llevar al límite a los coches. 
                    No todas son iguales: algunas son calles de ciudades famosas y otras son pistas construidas solo para correr,
                    ¿Cómo es un fin de semana de GP?
                    Da clic aqui para conocer los circuitos del Mundo">
                </MainSection>

                <h5 className="textInfo">Bienvenidos a la Parrilla de Circuitos</h5>

                <Row className="justify-content-center">
                    <Col className="col-xs-12 col-md-10 col-lg-8">
                        <MapComponent
                            circuitsData={circuitsData}
                            onClickMap={handleSelectedCircuit}
                            >
                        </MapComponent>
                        {/* este componente va fuera, flotando en el aire */}
                        <CircuitModal
                        show={showModal}
                        handleClose={handleClose}
                        circuitData={selectedCircuit}>
                        </CircuitModal>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WorldWideCircuits