import { Container, Row, Col } from 'react-bootstrap'

function FooterComp(){

    return(

        <>

            {/*componente footer para la pagina web*/}
            <footer className='pt-5'> 
                <Container className='pt-2'>
                    <Row>
                        <Col className='background-footer'>
                            <h6 className="footerInfo">@2026 Star Fragment Studio | Built piece by piece</h6>
                            <p>Pit Stop Academy</p>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </>

    )
}

export default FooterComp