import GlossaryComponent from "../Components/GlossaryComponent"
import '../styles/MainSection.css'
import {Container, Row, Col} from 'react-bootstrap'

function Glossary (){

    return(

        <>
            <Container className='pt-4'>
                <Row className='justify-content-center'>
                    <Col className='col-md-8 col-lg-6'>
                        <h1 className='mainTitle pb-4'>Diccionario para Expertos</h1>
                        <h4 className='mainTitle pb-4'>(en un minuto)</h4>
                        <p className='mainDescription pt-3 pb-4'>Para que cuando escuches “DRS”, “Paddock” o “Safety Car” en la tele, tu seas la mera verdura del caldo que le explique a los demás</p>
                    </Col>
                </Row>
            </Container>
            <GlossaryComponent>
            </GlossaryComponent>
        </>
    )
}

export default Glossary