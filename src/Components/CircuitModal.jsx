import { Modal, Button } from 'react-bootstrap'
import '../styles/CircuitModal.css'

function CircuitModal({show, handleClose, circuitData}) {

    /* si no hay datos, no se renderiza nada */
    if(!circuitData) return null;

    return (

        <>
            <Modal
            show={show}
            onHide={handleClose}
            centered
            size="lg"
            className='ticketModal'>
                <Modal.Body className='ticketBody'>

                    <div className='row align-items-center h-100'>

                        {/* lado izquierdo del ticket */}
                        <div className="col-12 col-md-5 ticketLeft">
                            <h5 className='textInfo text-uppercase'> GP de {circuitData.country} </h5>
                            <div className='circuitPicContainer'>
                                <img src={circuitData.circuitPic} alt="Pic Not Available" 
                                className='circuitLayout'/>
                            </div>
                        </div>
                               
                        {/* lado derecho del ticket */}
                        <div className="col-12 col-md-7 ticketRight">
                            <h5 className='textInfo'> {circuitData.circuitName} </h5>
                            {/* div con la información específica del circuito */}
                            <div>
                                <p className='textStats'> <strong> Longitud: </strong> {circuitData.circuitLength} </p>
                                <p className='textStats'> <strong> Vueltas: </strong> {circuitData.laps} </p>
                                <p className='textStats'> <strong> Récord: </strong> {circuitData.lapRecord} </p>
                                <p className='textStats'> <strong> Fecha: </strong> {circuitData.raceDate} </p>

                            </div>

                            {/* estilos para que parezca ticket */}
                            <div>
                                <p>
                                    ADMIT ONE - VIP PADDOCK PASS - {circuitData.id.toUpperCase()} 2026
                                </p>
                            </div>

                            {/* seccion para el boton de cerrar modal */}
                            <div className='text-end mt-4 pt-3 border-top border-secondary'>
                                <Button className='f1TicketBtn' onClick={handleClose}> Cerrar </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CircuitModal