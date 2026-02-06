import '../styles/Home.css'
import {Container, Row, Col} from 'react-bootstrap'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection';
import InfoCard from '../Components/InfoCard';
import FooterComp from '../Components/FooterComp';

function Home(){

    return(

        <>

            {/* SECCIÓN "HERO" DE LA PÁGINA */}
            <div className='pt-5 mb-5 mt-5'>
                <HeroSection></HeroSection>
            </div>

            {/* SECCIÓN DE LAS TARJETAS DINÁMICAS */}
            <Container className='justify-content-center pb-4'>
                <Row className='justify-content-center pb-5'>
                    <Col className='col-md-4'>
                        <InfoCard title="¿Qué Onda con la F1?"
                        description="¿Es solo dar vueltas en círculos? ¡Para nada! Deja te explico las reglas básicas,
                         que significan las banderas y por qué los mecánicos cambian llantas en menos de 2 segundos.
                          La base para que no te pierdas los domingos.">                            
                        </InfoCard>
                    </Col>
                    <Col className='col-md-4'>
                        <InfoCard title="Escuderías y Pilotos"
                        description="Acá te presento a los equipos (los ‘teams’) y a los cracks que manejan los monoplazas.
                         Desde el color de los autos hasta quien es el más rápido. 
                         Elige a tu favorito y empieza a apoyarlo">
                        </InfoCard>
                    </Col>
                    <Col>
                        <InfoCard title="Circuitos del Mundo"
                        description="Un tour por las pistas más épicas.
                         Desde las calles glamurosas de Mónaco hasta la velocidad pura de Monza.
                          Ponte cómodo que yo te platico donde corren y por qué cada pista es un reto diferente">
                        </InfoCard>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='col-md-4'>
                        <InfoCard title="Diccionario de Radio"
                        description="¿Escuchaste ‘Box, Box’ y no sabes que chingad*s pasa? 
                        ¿Ó por qué rayos dicen que un piloto tiene ‘Grip’? 
                        Entra aquí y te explico para que domines el lenguaje secreto de la F1 y dejes de poner cara de ¿WTF? cuando ves una carrera">
                        </InfoCard>
                    </Col>
                    <Col className='col-md-4'>
                        <InfoCard title="Héroes en el Cielo"
                        description="La F1 no sería lo mismo sin los valientes que lo dieron todo en el asfalto. 
                        Conoce la historia de Ayrton Senna, Jules Bianchi y otros guerreros que, aunque ya no corren con nosotros, 
                        siguen acelerando en el corazón de cada fan. Sus nombres son leyenda.">
                        </InfoCard>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;