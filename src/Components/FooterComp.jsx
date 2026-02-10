import { Container, Row, Col } from 'react-bootstrap'

function FooterComp(){

    return(

        <>

            {/*componente footer para la pagina web*/}
            <footer className='pt-5'> 
                <Container className='pt-2'>
                    <Row>
                        <Col className='background-footer'>
                            <h6 className="footerInfo">Powered by Dev Engine | High-Performance Development</h6>
                            <p>@2026 Pit Stop Academy</p>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </>

    )
}

export default FooterComp