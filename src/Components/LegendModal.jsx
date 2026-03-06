import { Modal, Button } from 'react-bootstrap'
import '../styles/LegendModal.css'

function LegendModal ({ show, handleClose, legend }) {

    if(!legend) return null; //no devuelve nada si esta vacío

    return(
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size='lg'
                centered
                className='darkLegendModal'>
                <Modal.Body className='legendModalBody'>

                    {/* contenedor de la información */}
                    <div className='row align-items-center'>

                        {/* contendor del lado izquierdo */}
                        <div className='col-12 col-md-5 text-center mb-4 mb-md-0'>
                            {/* contenedor de la imagen */}
                            <div className='legendImgContainer'>
                                <img src={legend.image} alt={legend.name} className='legendModalImg' />
                            </div>
                        </div>

                        {/* contenedor del lado derecho */}
                        <div className='col-12 col-md-7 legendInfo'>
                            <h3 className='legendModalName'> {legend.name} </h3>
                            <p className='legendModalYears'> {legend.years} </p>
                            <blockquote className='legendQuote'>
                                "{legend.quote}"
                            </blockquote>
                            {/* historia y legado */}
                            <div className='legendHistory mt-4'>
                                <h5 className='legendModalName'> Su historia </h5>
                                <p className='legendModalYears'> {legend.history} </p>
                                <h5 className='legendModalName'> El Legado </h5>
                                <p className='legendModalYears'> {legend.impact} </p>
                            </div>

                            {/* boton para cerrar el modal */}
                            <div className='text-end mt-4'>
                                <Button onClick={handleClose} className='f1LegendBtn'>
                                    Cerrar Tributo
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>  
            </Modal>
        </>
    )
}

export default LegendModal