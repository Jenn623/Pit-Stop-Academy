import {Modal, Tab, Tabs, Button} from 'react-bootstrap'

/* recibimos tres props que nos ayudan para la visualizacion del modal: show, handleClose, teamData */
function TeamModal({show, handleClose, teamsData}){
    if(!teamsData) return null;

    return(

        <>
            {/* se crea el modal centrado, donde se hara el manejo de as tabs (pestañas) */}
            <Modal className='modal-dialog-centered'
            show={show}
            onHide={handleClose}>

                {/* creacion de las tabs / pestañas */}
                <Tabs
                defaultActiveKey="historia">

                    {/*pestaña 1 para el apartado de historia */}
                    <Tab title="Historia" eventKey="historia">
                        <div>
                            <p> {teamsData.history} </p>
                            <p> <strong>Hito TMI</strong> </p>
                            <p> {teamsData.teamTMI} </p>
                        </div>
                    </Tab>
                    {/* pestaña 2 para el piloto 1 */}
                    <Tab title="Piloto 1" eventKey="piloto1">
                        <div>
                            <div>
                                <h6> {teamsData.drivers[0].racerName} </h6>
                                {/* aqui va la imagen de cada piloto */}
                            </div>
                            <div>
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
                    <Tab title="Piloto 2" eventKey="piloto2">
                        <div>
                            <div>
                                <h6> {teamsData.drivers[1].racerName} </h6>
                            </div>
                            <div>
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
                <div className='text-end mt-3'>
                    <Button onClick={handleClose}>Cerrar</Button>
                </div>
            </Modal>
        </>
    )
}

export default TeamModal