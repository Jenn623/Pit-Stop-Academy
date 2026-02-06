import '../styles/HeroSection.css'
import {Container, Row, Col} from 'react-bootstrap'

function HeroSection() {

    return(

        <>

            {/*Contenedor que mantendra todo centrado en la página*/}
            <Container className='pt-4'>
                {/*Crea una fila y centra el contenido horizontalmente*/}
                <Row className='justify-content-center'>
                    {/*Crea una columna para organizar el texto*/}
                    <Col className='col-md-8 col-lg-6'>
                    <h1 className='heroTitle pb-4'>¡Pit Stop Academy!</h1>
                    <p className='heroDescription pt-3 pb-4'>
                        ¿Alguna vez has visto coches yendo a 300 km/h y te has preguntado que caraj* esta pasando? 
                        ¡Tranqui! Que acá te explico la Fórmula 1 sin palabras raras ni tecnicismos aburridos. 
                        Prepárate para entender por qué todo el mundo esta obsesionado con este deporte (y con Sergio Pérez)
                    </p>
                    <button type='button' className='rounded-pill heroBtn justify-content-center'>
                        Empezar
                    </button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeroSection