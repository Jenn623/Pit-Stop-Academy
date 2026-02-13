import Header from "./Header";
import FooterComp from "./FooterComp";

function Layout ({children}){

    return(

        <>
        {/* d-flex: activa el flexbox */}
        {/* flex-column: organiza a los componentes hijos en columna vertical */}
        {/* min-vh-100: asegura que el contenedor mida al menos el 100% de alto de la ventana */}
            <div className="d-flex flex-column min-vh-100">
                {/*El header siempre estará arriba */}
                <Header></Header>

                {/*En el Main Section va a estar los componentes de la página a renderizar */}
                {/* flex-grow-1 hace que la seccion main ocupe el resto del espacio disponible */}
                <main className="flex-grow-1">
                    {children}
                </main>

                {/*El footer siempre estará en la parte inferior */}
                {/* mt-auto provoca un margen top automatico */}
                <FooterComp className="mt-auto"></FooterComp>
            </div>
        </>
    )
}

export default Layout