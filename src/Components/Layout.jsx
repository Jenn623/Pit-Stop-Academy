import Header from "./Header";
import FooterComp from "./FooterComp";

function Layout ({children}){

    return(

        <>
            <div>
                {/*El header siempre estará arriba */}
                <Header></Header>

                {/*En el Main Section va a estar los componentes de la página a renderizar */}
                <main>
                    {children}
                </main>

                {/*El footer siempre estará en la parte inferior */}
                <FooterComp></FooterComp>
            </div>
        </>
    )
}

export default Layout