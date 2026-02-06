import '../styles/InfoCard.css'

/*funcion donde pasamos props para hacer las tarjetas interactivas*/
function InfoCard({title, description}){

    return(

        <>
        {/*Una clase de tipo Card, una propiedad de boostrap*/}
            <div className="card card-border justify-content-center">
                <h5 className="titleCard"> {title} </h5>
                
                <p className="descriptionCard"> {description} </p>
            </div>
        </>
    )
}

export default InfoCard