import { Container, Row, Col } from 'react-bootstrap'
import MainSection from '../Components/MainSection'
import InfoCard from '../Components/InfoCard'
import FlipCard from '../Components/FlipCard'

function WhatIsF1(){

        /* arreglo con la informacion de las tarjetas para hacer un mapeo para renderizarlas */
    const data = [
        {title: "El Código de Colores", descriptionFront: "Los pilotos no tienen luces de giro, tienen banderas. Desde el ‘¡Aguas!’ hasta el ‘¡Ganaste!’, aquí te explico que significa cada color. ", descriptionBack: "🏁 Cuadros: ¡Game Over! Alguien ya ganó🟡 Frenale, hay peligro y no se rebasa🔴 En Pause, todos a los garajes🟢 ¡Gas a fondo!, todo despejado"},
        {title: "Zapatos de Colores", descriptionFront: "¿Por qué chingad*s unas llantas tienen rayas rojas y otras amarillas? Spoiler: Es la clave para que Verstappen gane la carrera. Descubre el mundo de los compuestos", descriptionBack: "¿Por qué unas llantas tienen rayas rojas y otras blancas? Spoiler: Son los zapatos del coche y elegir los correctos lo es TODO. 🔴 Rojas: Súper rápidas pero se gastan en un abrir y cerrar de ojos. 🟡 Amarillas: Las confiables, duran y corren bien. ⚪ Blancas: Son las más 'duras', aguantan muchísimo pero no son tan veloces. ¡Si empieza a llover, sacan las de rayitas verdes para no patinar!"},
        {title: "Magia en 2 segundos", descriptionFront:"Imagina cambiar 4 ruedas en lo que tardas en parpadear. Acá te explico como trabajan 20 gatos en perfecta sincronía", descriptionBack: "Es el momento más loco de la carrera. El piloto entra a los boxes y, en lo que tardas en parpadear, ¡20 personas ya le cambiaron las 4 llantas! Es una coreografía perfecta donde cada segundo cuenta. Si los mecánicos se tardan más de 3 segundos, ¡ya se siente como una eternidad! Es puro trabajo en equipo nivel leyenda."},
        {title: "Naves Espaciales", descriptionFront: "No son autos normales, no no; tienen alas y motores híbridos locos. Aprende qué es el DRS y por qué el coche parece pegado al suelo", descriptionBack: "Estos no son autos para ir al súper, son jets sin alas para volar. Tienen un diseño que, en lugar de elevarlos, los 'pega' al asfalto para que den vueltas a 300 km/h sin salir volando. Además, tienen el DRS: un botón mágico que abre el ala trasera en las rectas para que el coche no tenga resistencia y pueda rebasar fácil. ¡Pura ciencia de otro planeta!"},
        {title: "Lo que NO se puede hacer", descriptionFront: "Puntos, clasificaciones y penalizaciones. Lo justo y necesario para que sepas quién va ganando el campeonato", descriptionBack: "Para que esto no sea un juego de carritos chocones, hay reglas. No puedes echarle el coche a los demás, no puedes zigzaguear como loco para que no te pasen y tienes que respetar los límites de la pista. Si te portas mal, los jueces te castigan con segundos extra al final o, si te pasas de intenso, te sacan la Bandera Negra y ¡estás fuera!"}
    ]

    return(

        <>
            <div className='pt-5'>
                {/* sección para el hero Section de cada sección */}
                <MainSection title="¿Qué onda con la F1?"
                description="Y no, no es solo ver coches dando vueltas. Es una partida de ajedrez a 300 km/h.
                Aquí te enseño lo básico para que cuando veas la tele,
                ¡entiendas TODO! (o la mayoría, eso ya es ganancia)">
                </MainSection>
            </div>
            {/* seccion para el mapeo de las tarjetas dinámicas */}
            <Container className='pt-5 pb-5'>
                <Row className='justify-content-center g-4'> {/* g-4 es de "gutter", que es el espaciado entre las columnas */}
                    {/* hacemos un mapeo con cada item del array, asignando un indice a cada uno */}
                    {data.map((item, index) =>(
                        <Col key={index} className='col-md-4'> {/* con md-4 se asegura que solo sean 3 tarjetas máximo por fila */}
                            <FlipCard title={item.title} frontDescription={item.descriptionFront} backDescription={item.descriptionBack}></FlipCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>

    )

}

export default WhatIsF1