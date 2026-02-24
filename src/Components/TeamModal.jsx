import {Modal, Tab, Tabs, Button} from 'react-bootstrap'
import '../styles/TeamModal.css'

/* recibimos tres props que nos ayudan para la visualizacion del modal: show, handleClose, teamData */
function TeamModal({show, handleClose, teamsData}){
    if(!teamsData) return null;

    return(

        <>
            {/* se crea el modal centrado, donde se hara el manejo de as tabs (pestañas) */}
            <Modal className='dialog-centered text-center myDarkModal'
            show={show}
            onHide={handleClose}
            style={{ '--team-color': teamsData.color }}
            centered> {/* esta es una variable local, la cual va a almacenar el color del equipo en específico */}

                {/* creacion de las tabs / pestañas */}
                <Tabs
                defaultActiveKey="historia"
                style={{ backgroundColor: teamsData.color }}
                className='teamGradient'>

                    {/*pestaña 1 para el apartado de historia */}
                    <Tab title="Historia" eventKey="historia">
                        <div className='teamInfo justify-content-center teamGradient'>
                            <h5> {teamsData.teamName} </h5>
                            <p> {teamsData.history} </p>
                            <p> <strong>Hito TMI</strong> </p>
                            <p> {teamsData.teamTMI} </p>
                        </div>
                    </Tab>
                    {/* pestaña 2 para el piloto 1 */}
                    <Tab title="Piloto 1" eventKey="piloto1" className='driverInfo '>
                        <div className='row teamGradient justify-content-center'>
                            <div className='teamInfo col-12 col-md-5 text-center mb-4 mb-md-0'>
                                <h5 className='teamInfo mb-3'> {teamsData.drivers[0].racerName} </h5>mn
                                {/* aqui va la imagen de cada piloto */}
                                <div className='driverContainer'>
                                    <img src={teamsData.drivers[0].driverPic} alt="" className='driverImage'/>
                                </div>
                            </div>
                            <div className='teamInfo col-12 col-md-7 text-center'>
                                <p> <strong>Apodo: </strong> {teamsData.drivers[0].nickname} </p>
                                <p> <strong>Skill: </strong> {teamsData.drivers[0].skill} </p>
                                <p> <strong>TMI:</strong> {teamsData.drivers[0].TMI} </p>
                                <p className='justify-content-center'> <strong>Stats</strong> </p>
                                <p> <strong>Edad:</strong> {teamsData.drivers[0].stats.edad} </p>
                                <p> <strong>Nacionalidad:</strong> {teamsData.drivers[0].stats.nacionalidad} </p>
                                <p> <strong>Campeonatos:</strong> {teamsData.drivers[0].stats.campeonatos} </p>
                            </div>
                        </div>
                    </Tab>
                    {/* pestaña 3 para el piloto 2 */}
                    <Tab title="Piloto 2" eventKey="piloto2" className='driverInfo'>
                        <div className='row teamGradient justify-content-center'>
                            <div className='teamInfo col-12 col-md-5 text-center mb-4 mb-md-0'>
                                <h5 className='teamInfo mb-3'> {teamsData.drivers[1].racerName} </h5>
                                <div className='driverContainer'>
                                    <img src={teamsData.drivers[1].driverPic} alt="" className='driverImage' />
                                </div>
                            </div>
                            <div className='teamInfo col-12 col-md-7 text-center'>
                                <p> <strong>Apodo: </strong> {teamsData.drivers[1].nickname} </p>
                                <p> <strong>Skill: </strong> {teamsData.drivers[1].skill} </p>
                                <p> <strong>TMI:</strong> {teamsData.drivers[1].TMI} </p>
                                <p className='justify-content-center'> <strong>Stats</strong> </p>
                                <p> <strong>Edad:</strong> {teamsData.drivers[1].stats.edad} </p>
                                <p> <strong>Nacionalidad:</strong> {teamsData.drivers[1].stats.nacionalidad} </p>
                                <p> <strong>Campeonatos:</strong> {teamsData.drivers[1].stats.campeonatos} </p>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
                <div className='text-end mt-3 teamGradient'>
                    <Button onClick={handleClose}>Cerrar</Button>
                </div>
            </Modal>
        </>
    )
}

export default TeamModal