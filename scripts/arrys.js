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

for (let key in parrafos) {
    console.log(key, parrafos[key], typeof key);
}

parrafos.forEach((element, i) => {
    console.log(i, element, typeof i);
});


var menu = [
    {name: "Pizza", price: 90, country: "Italy"},   
    {name: "Taco", price: 20, country: "Mexico"},
    {name: "Sushi", price: 80, country: "Japon"},
    {name: "Quesadilla", price: 50, country: "Mexico"}
] 

console.log(menu.find(platillo => platillo.price > 50));

console.log(menu.findIndex((platillo) => platillo.name == "Taco"));
console.log(menu.findIndex((platillo) => platillo.name == "Sushi"));

console.log(menu.filter(platillo => platillo.country == "Mexico"));
console.log(menu.filter(platillo => platillo.price  > 20));

console.log(menu.some(platillo => platillo.price <= 50)); //hay algun platillo menor o igual a 50 peso?
console.log(menu.every(platillo => platillo.price >= 20));//todos los platillos son mayores a 20 peso?