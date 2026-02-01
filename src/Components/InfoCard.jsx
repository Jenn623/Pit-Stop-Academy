import '../styles/InfoCard.css'

/*funcion donde pasamos props para hacer las tarjetas interactivas*/
function InfoCard({title, description}){

    return(

        <>
            <div className="card card-border justify-content-center">
                <h4 className="titleCard"> {title} </h4>
                
                <p className="descriptionCard"> {description} </p>
            </div>
        </>
    )
}

export default InfoCard