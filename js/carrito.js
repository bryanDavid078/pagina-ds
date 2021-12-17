const carrito = document.getElementById('carrito');
const Uniforme = document.getElementById('lista-uniformes');
const listaUniformes = document.querySelector('#lista-carrito tbody');
const vaciacarritobtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    Uniforme.addEventListener('click,comprarUniforme');
    carrito.addEventListener('click,eliminarUniforme');
    vaciar.addEventListener('click,vaciarCarrito');
    document.addEventListener('DOMContentlonded', leerlocalStorage)


}

function comprarUniforme(e) {
    e.preventDeFault();
    if (e.target.classList.contains('agregar-carrito')) {
        const Uniforme = e.target.parentElement.parentElement;
        leerDatosUniforme(Uniforme);
    }
}

function leerDatosUniforme(Uniforme) {
    const infoUniforme = {
        Image: Uniforme.querySelector('img').src,
        titulo: Uniforme.querySelector('h4').textContent,
        precio: Uniforme.querySelector('precio p'),
        textContent,
        Id: Uniforme.querySelector('a').getAttribute('date-id'),
    }
    insertarCarrito(infoUniforme);
}

function insertarCarrito(uniforme) {
    const row = document.createElement('tr');
    row.innerHTML = ` 
    <td>
    <img src="${uniforme.imagen}" width=100>
</td>
<td>${uniforme.titulo}</td>
<td>${uniforme.precio}</td>
<td>
    <a href="#" class="borrar-uniforme" data-id="${uniforme.id}">X</a>
</td>     
    
    `;
    listaUniformes.appendChild(row);
    guardarUniformeLocalStorage(uniforme);
}

function eliminaruniforme(e) {
    e.preventDefault();

    let uniforme,
        uniformeId;
    if (e.target.classList.contains('borrar-uniforme')) {
        e.target.parentElement.parentElement.remove();
        uniforme = e.target.parentElement.parentElement;
        uniformeId = cafe.querySelector('a').getAttribute('data-id');
    }
    eliminaruniformeLocalStorage(uniformeId);
}

function vaciarCarrito() {
    while (listaUniformes.firstChild) {
        listaUniformes.removeChild(listaUniformes.firstChild);

    }

    vaciarLocalStorage();
    return false;
}

function guardarUniformeLocalStorage(uniforme) {
    let uniforme;
    cafes = obtenerUniformeLocalStorage();
    cafes.push(uniforme);
    localStorage.setItem('uniforme', JSON.stringify(uniforme))
}

function obtenerUniformesLocalStorage() {
    let uniformeLS;

    if (localStorage.getItem('uniforme') === null) {
        uniformeLS = [];
    } else {
        uniformeLS = JSON.parse(localStorage.getItem('uniforme'));
    }
    return uniformeLS;
}

function leerLocalStorage() {
    let uniformeLS;

    uniformeLS = obteneruniformeLocalStorage();

    cafesLS.forEach(function(uniforme) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${uniforme.imagen}" width=100> 
            </td>
            <td>${uniforme.titulo}</td>
            <td>${uniforme.precio}</td>
            <td>
                <a href="#" class="borrar-uniforme" data-id="${uniforme.id}">X</a>
            </td>
        `;
        listauniforme.appendChild(row);
    });

}

function eliminaruniformeLocalStorage(uniforme) {
    let uniformeLS;

    uniformeLS = obteneruniformeLocalStorage();

    uniformeLS.forEach(function(uniformeLS, index) {
        if (uniformeLS.id === uniforme) {
            uniformeLS.splice(index, 1)
        }
    });

    localStorage.setItem('uniformes', JSON.stringify(uniformesLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}