import '../styles/LegendsCard.css'

function LegendsCard ({legend, onClick}) {

    return (
        <>
            <div className='cardContainer' onClick={() => onClick(legend)}>
                {/* contenedor de la imagen del piloto */}
                <div className='picWrapper'>
                    <img src={legend.image} alt={legend.name} className='legendImage' />
                </div>
                {/* contenedor de la información del piloto */}
                <div className='infoWrapper'>
                    <h4 className='legendName'> {legend.name} </h4>
                </div>
            </div>
        </>
    )
}

export default LegendsCard