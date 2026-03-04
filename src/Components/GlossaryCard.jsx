import { useState } from "react"
import '../styles/GlossaryCard.css'

function GlossaryCard ({data}){

    /* estado para manejar si la cara esta girada o no */
    const [isFlipped, setIsFlipped] = useState(false);

    /* funcion para cambiar el estado de la tarjeta */
    const handleFlip = () =>{
        setIsFlipped(!isFlipped);
    };

    return(
        <>
            {/* contenedor que contiene el evento de "girar" el componente card*/}
            <div className='cardContainerr' onClick={handleFlip}>
                {/* este es el div que realmente gira, como si fuera una moneda */}
                {/* todas las clases van dentro de los "{ }", que representan a las clases, si estuviera dentro " '' ", se intrepreta como strings y no realiza ninguna función */}
                {/* el uso de {} indica uso de codigo en JS, las comillas ` ` permiten el uso de las clases */}
                <div className={`cardInner justify-content-center ${isFlipped ? 'cardIsFlipped' : ''}`}> {/* este ternario se interpreta como: usa la clase cardInner siempre, PERO si isFlipped es verdadero, muestra la clase isFlipped */}
                {/* básicamente decide si se hace rotar a la tarjeta o se deja un espacio en blanco */}

                    {/* cara del frente */}
                    <div className='cardFront'>
                        <h5 className='titleCard'> {data.term} </h5>
                        <span className="clickHint">Click para leer</span>
                    </div>
                    {/* cara trasera */}
                    <div className='cardBack'>
                        <h5 className="fw-bold mb-2 border-bottom pb-2">{data.term}</h5>
                        <p className='descriptionCard'> {data.definition} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GlossaryCard