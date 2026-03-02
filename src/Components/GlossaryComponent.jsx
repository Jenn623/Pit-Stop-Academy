import { useState } from "react"
import glossaryData from "../data/glossaryData"
import GlossaryCard from "./GlossaryCard";
import '../styles/GlossaryComponent.css'


function GlossaryComponent(){

    /* estados para el buscador y el filtro */
    const[searchTerm, setSearchTerm] = useState("");
    const[activeFilter, setActiveFilter] = useState("Todos");

    /* opciones de filtros */
    const filters = ["Todos", "Coche", "Carrera", "Estrategia"];

    /* filtrado doble: por texto y categoría */
    const filteredTerms = glossaryData.filter((item) => {
        // ¿Coincide con la búsqueda? Búsqueda en el título y definición
        const matchSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.definition.toLowerCase().includes(searchTerm.toLowerCase());
        
        // Búsqueda en la categoría
        const matchCategory = activeFilter === "Todos" || item.category === activeFilter;

        // Solo se muestra si cumple ambas condiciones
        return matchSearch && matchCategory;
    });

    return (

        <>
            <div className="container my-5 text-center">
                {/* buscador */}
                <div className="row justify-content-center mb-4">
                    <div className="col-12 col-md-6">
                        <input type="text" 
                            placeholder="Box box, DRS..."
                            className="searchInput"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}/>
                    </div>
                </div>
                {/* filtros */}
                <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                    {filters.map(filter => (
                        <button key={filter} className="filterBtn activeFilter === filter ? activeFilter : ''"
                        onClick={() => setActiveFilter(filter)}>
                            {filter}
                        </button>
                    ))}
                </div>
                {/* GRID de tarjetas */}
                <div className="glossaryGrid text-center justify-content-center">
                    {filteredTerms.length > 0 ? (
                        filteredTerms.map(item => (
                            <GlossaryCard key={item.id} data={item}/>
                        ))
                    ) : (
                        <p className="text-center justify-content-center">No se encontraron términos que coincidan con su búsqueda en los pits</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default GlossaryComponent