import "./asyncmock.css"

const envasesGral = [
    { id: 1, nombre: "Pote 100gr corto", precio: 50, img : "../imagenes/POO1-4.jpg" },
    { id: 2, nombre: "Pote 100gr largo", precio: 60, img: "../imagenes/POO2-2.jpg" },
    { id: 3, nombre: "Pico Doble 1lt", precio: 200, img: "../imagenes/BL08.jpg" },
    { id: 4, nombre: "Pico Doble 500cc", precio: 150, img: "../imagenes/BL10.jpg" },
]


export const getEnvases = () => {
    return new Promise((res) => { setTimeout(() => { res(envasesGral); }, 1000) })
}

export const getEnvase = (id) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const envase = envasesGral.find(prod => prod.id === id);
            resolve(envase);
        }, 1000)
    })
}


export const getCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const categoria = envasesGral.filter(prod => prod.idCat === idCategoria);
            resolve(categoria);
        }, 1000)
    })
}
