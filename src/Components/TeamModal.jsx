import {Modal, Tab, Tabs, Button} from 'react-bootstrap'
import '../styles/TeamModal.css'

/* recibimos tres props que nos ayudan para la visualizacion del modal: show, handleClose, teamData */
function TeamModal({show, handleClose, teamsData}){
    if(!teamsData) return null;

    return(

        <>
            <Modal 
                className='dialog-centered text-center myDarkModal'
                show={show}
                onHide={handleClose}
                style={{ '--team-color': teamsData.color }}
                centered
            > 
                {/* 🛠️ AQUÍ ESTÁ LA SOLUCIÓN: Envolvemos TODO en Modal.Body */}
                {/* Le pasamos la clase teamGradient aquí para que pinte todo el fondo de una vez */}
                <Modal.Body className='p-0 teamGradient' style={{ borderRadius: 'var(--bs-modal-border-radius)' }}>
                    
                    <Tabs
                        defaultActiveKey="historia"
                        style={{ backgroundColor: teamsData.color }}
                        className='teamGradient'
                    >
                        {/* PESTAÑA 1: HISTORIA */}
                        <Tab title="Historia" eventKey="historia">
                            {/* Le agregué un poco de padding (p-4) para que el texto respire */}
                            <div className='teamInfo justify-content-center p-4'>
                                <h5 className='mb-3'> {teamsData.teamName} </h5>
                                <p> {teamsData.history} </p>
                                <p className='mt-3'> <strong>Hito TMI</strong> </p>
                                <p> {teamsData.teamTMI} </p>
                            </div>
                        </Tab>
                        
                        {/* PESTAÑA 2: PILOTO 1 */}
                        <Tab title="Piloto 1" eventKey="piloto1" className='driverInfo'>
                            <div className='row justify-content-center p-3'>
                                <div className='teamInfo col-12 col-md-5 text-center mb-4 mb-md-0'>
                                    {/* 🧹 Polizón "mn" eliminado aquí */}
                                    <h5 className='teamInfo mb-3'> {teamsData.drivers[0].racerName} </h5> 
                                    <div className='driverContainer'>
                                        <img src={teamsData.drivers[0].driverPic} alt="" className='driverImage'/>
                                    </div>
                                </div>
                                <div className='teamInfo col-12 col-md-7 text-center text-md-start'>
                                    <p> <strong>Apodo: </strong> {teamsData.drivers[0].nickname} </p>
                                    <p> <strong>Skill: </strong> {teamsData.drivers[0].skill} </p>
                                    <p> <strong>TMI:</strong> {teamsData.drivers[0].TMI} </p>
                                    <p className='mt-3 border-bottom pb-1'> <strong>Stats</strong> </p>
                                    <p> <strong>Edad:</strong> {teamsData.drivers[0].stats.edad} </p>
                                    <p> <strong>Nacionalidad:</strong> {teamsData.drivers[0].stats.nacionalidad} </p>
                                    <p> <strong>Campeonatos:</strong> {teamsData.drivers[0].stats.campeonatos} </p>
                                </div>
                            </div>
                        </Tab>
                        
                        {/* PESTAÑA 3: PILOTO 2 */}
                        <Tab title="Piloto 2" eventKey="piloto2" className='driverInfo'>
                            <div className='row justify-content-center p-3'>
                                <div className='teamInfo col-12 col-md-5 text-center mb-4 mb-md-0'>
                                    <h5 className='teamInfo mb-3'> {teamsData.drivers[1].racerName} </h5>
                                    <div className='driverContainer'>
                                        <img src={teamsData.drivers[1].driverPic} alt="" className='driverImage' />
                                    </div>
                                </div>
                                <div className='teamInfo col-12 col-md-7 text-center text-md-start'>
                                    <p> <strong>Apodo: </strong> {teamsData.drivers[1].nickname} </p>
                                    <p> <strong>Skill: </strong> {teamsData.drivers[1].skill} </p>
                                    <p> <strong>TMI:</strong> {teamsData.drivers[1].TMI} </p>
                                    <p className='mt-3 border-bottom pb-1'> <strong>Stats</strong> </p>
                                    <p> <strong>Edad:</strong> {teamsData.drivers[1].stats.edad} </p>
                                    <p> <strong>Nacionalidad:</strong> {teamsData.drivers[1].stats.nacionalidad} </p>
                                    <p> <strong>Campeonatos:</strong> {teamsData.drivers[1].stats.campeonatos} </p>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                    
                    {/* El botón de cerrar ahora vive protegido dentro del Body */}
                    {/* Un poco de padding y borde sutil para separarlo del contenido */}
                    <div className='text-end p-2 border-top border-secondary'>
                        <Button variant="light" onClick={handleClose}>Cerrar</Button>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default TeamModal