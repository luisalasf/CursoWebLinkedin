parrafos = document.querySelectorAll(".parrafos p")
nuevoArray = []
parrafos.forEach(element => {
    nuevoArray.push(element.innerHTML);
});
console.log(nuevoArray);
console.log(typeof nuevoArray);
 
parrafos = Array.from(parrafos);
parrafos = parrafos.map(parrafo => parrafo.textContent)

console.log(parrafos);