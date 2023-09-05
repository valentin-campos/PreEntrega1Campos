
const minerales = [
    {nombre: "Granate", color: "granate", peso: "alto", dureza: "alta"},
    {nombre: "Feldespeta", color: "rosa", peso: "medio", dureza: "media"},
    {nombre: "Cuarzo", color: "transparente", peso: "bajo", dureza: "alta"},
    {nombre: "Calcita", color: "verde", peso: "bajo", dureza: "baja"},
    {nombre: "Magnetita", color: "negro", peso: "alto", dureza: "alta"},
];



function identificarMineral() {
    const color = prompt("Ingrese el color del mineral:");
    const peso = prompt("Ingrese el peso del mineral (bajo, medio, alto):");
    const dureza = prompt("Ingrese la dureza del mineral (baja, media, alta):");

    let  mineralIdentificado = "No se pudo identificar el mineral, disculpe :(";

    for (let i = 0; i < minerales.length; i++) {
        if (color == minerales[i].color && dureza == minerales[i].dureza && peso == minerales[i].peso) {
            mineralIdentificado = minerales[i].nombre;
            break;
        }
    }
    
    alert("El mineral es: " + mineralIdentificado + ".")
}




