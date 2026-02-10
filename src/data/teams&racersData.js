/* este es un array de objetos para el renderizado del carrusel de fotos */

const teamsData = [
    {
    id: "cadillac",
    teamNickname: "The New Challenger",
    teamName: "Cadillac",
    teamLogo: "/images/Cadillac/cadillac-icon.avif",
    color: "#1F1E1E",
    history: "Entran con todo en 2026 de la mano de *Andretti*. Es el regreso de un gigante americano para pelearle a los europeos en su propio juego",
    teamTMI: "Es la apuesta más grande de General Motors para conquistar el mundo de la velocidad",
    drivers: [
        {racerName:"Sergio 'Checo' Perez", nickname:"El Ministro de Defensa", skill:"Cuidar las llantas como nadie y defender su posición como un muro", TMI:"Es el piloto mexicano más exitoso y todo un héroe nacional de su país", stats:{edad: "36 años", nacionalidad: "Mexicano", campeonatos: "0"},},
        {racerName: "Valtteri Botas", nickname: "Bottas 2.0", skill: "Trabajo en equipo y velocidad en curvas rápidas", TMI: "Le encanta el ciclismo y tiene una obsesión divertida con tomarse fotos en lagos de Finlandia", stats: {edad: "36 años", nacionalidad: "Finlandia", campeonatos: "0"},},
    ],
    },
    {
    id: "ferrari",
    teamNickname: "The Prancing Horse",
    teamName: "Ferrari",
    teamLogo: "/images/Ferrari/ferrari-icon.avif",
    color: "#E10600",
    history: "Fundada en 1929 por Enzo Ferrari. Son los 'OG' de la F1; han estado desde la primera carrera en 1950. Si la F1 fuera una religión, Ferrari sería la catedral",
    teamTMI: "Es el único equipo que ha participado en todas las temporadas de la historia. ¡Son leyenda pura!",
    drivers: [
        {racerName:"Charles Leclerc", nickname:"El elegido", skill:"Velocidad pura en clasificación (vuela los sábados)", TMI:"Además de piloto, ¡es pianista y compone su propia música!", stats:{edad: "28 años", nacionalidad: "Mónaco", campeonatos: "0"},},
        {racerName:"Lewis Hamilton", nickname: "Sir Lewis", skill: "Consistencia total y gestión de llantas", TMI: "Es un icono de la moda y su perro Roscoe tiene pase VIP eterno al Paddock", stats:{edad: "41 años", nacionalidad: "Reino Unido", campeonatos: "7"},},
    ],
    },
    {
    id: "the-bulls",
    teamNickname: "The Bulls",
    teamName: "Red Bull Racing",
    teamLogo: "/images/Red Bull/red-bull-icon.avif",
    color: "#E10600",
    history: "Fundada en 2005 por Dietrich Mateschitz. Compraron un equipo viejo y decidieron que una marca de bebidas energéticas podía vencer a los gigantes de los autos. Spoiler: lo lograron",
    teamTMI: "Tienen el récord del Pit Stop más rápido de la historia (¡1.82 segundos!)",
    drivers: [
        {racerName:"Max Verstappen", nickname:"Mad Max", skill:"Agresividad y control bajo la lluvia", TMI:"¡Vive para las carreras! Cuando no está en un F1 real, está en su simulador en casa compitiendo online", stats:{edad: "28 años", nacionalidad: "Países Bajos", campeonatos: "3"},},
        {racerName:"Isack Hadjar", nickname: "El pequeño gran prospecto", skill: "Valentía en los rebases", TMI: "Es el protegido de Red Bull y dicen que tiene el mismo temperamento fuerte que Max.", stats:{edad: "21 años", nacionalidad: "Francia", campeonatos: "0"},},
    ],
    },
    {
    id: "mclaren",
    teamNickname: "The Papaya Team",
    teamName: "McLaren",
    teamLogo: "/images/McLaren/mcLaren-icon.avif",
    color: "#E10600",
    history: "Fundada en 1963 por Bruce McLaren. Son famosos por su color naranja brillante y por ser siempre los 'cool' de la parrilla.",
    teamTMI: "Fueron los primeros en construir un coche totalmente de fibra de carbono (más ligero y resistente)",
    drivers: [
        {racerName:"Lando Norris", nickname:"Last Lap Lando", skill:"Reflejos de gato y carisma", TMI:"Es fanático del golf y de los videojuegos; es el piloto más 'streamer' de todos", stats:{edad: "26 años", nacionalidad: "Reino Unido", campeonatos: "0"},},
        {racerName:"Oscar Piastri", nickname: "El Robot", skill: "Calma total. Nada lo pone nervioso, parece que no tiene pulso", TMI: "Ganó casi todas las categorías menores en su primer intento. ¡Un prodigio!", stats:{edad: "24 años", nacionalidad: "Australia", campeonatos: "7"},},
    ],
    },

]

export default teamsData