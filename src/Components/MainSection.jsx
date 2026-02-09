import {Container, Row, Col} from 'react-bootstrap'
import '../styles/MainSection.css'

function MainSection({title, description}){

    return(

        <>
        {/* seccion de contenedor donde se organizara la información */}
            <Container className='pt-4'>
                <Row className='justify-content-center'>
                    <Col className='col-md-8 col-lg-6'>
                    <h1 className='mainTitle pb-4'> {title} </h1>
                    <p className='mainDescription pt-3 pb-4'> {description} </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainSection