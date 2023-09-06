export const libros = [

    {
        id: 1,
        nombre: "El Principito",
        autor: "Antoine de Saint-Exupery",
        imagen: "",
        precio:7000
    },
    {
        id: 2,
        nombre: "El Psicoanalista",
        autor: "John Katzenbach",
        imagen: "",
        precio:12500                                                                
    },
    {
        id: 3,
        nombre: "Los Mercenarios",
        Autor: "Roberto Arlt",
        imagen: "",
        precio:6000
    },
    
    ];
    
    JSON.parse(localStorage.getItem("libros")) || localStorage.setItem("libros", JSON.stringify(libros));
    
    