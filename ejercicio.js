//======================Ejercicios DOM I===============================


// Ejercicio 1: 100 Buttons
/*

const section = document.getElementsByTagName('section');
for (let i = 1; i <= 100; i++) {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = i;
    if (i % 2 == 0) {
        button.style.backgroundColor = "blue";
    } else {
        button.style.backgroundColor = "red";

    }
    if (i % 5 === 0) {
        button.style.color = 'green';
    }
    button.style.margin = "2px"
    button.style.width = "34px"
    section[0].appendChild(button);
}

*/


//==============================================//


// Ejercicio 2: Rainbow text
/*


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll("span");

for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = colors[i];
}
*/

//==============================================//



//Ejercicio 3: Fix Wikipedia

//1.En el documento sobra el h2 con la clase subtitle. Debes eliminarlo.
let subtitle = document.querySelector(".subtitle");
subtitle.remove();

//2.Los span con la clase bold deben aparecer en negrita. Hazlo sin tocar el documento de CSS: dale los estilos inline.
let bold = document.querySelectorAll(".bold");
bold.forEach(function(item) {
  item.style.fontWeight = "bold";
});

//3. Los span con la clase italics deben ir en cursiva. Hazlo sin tocar el documento de CSS: dale los estilos inline.
let italics = document.querySelectorAll(".italics");
italics.forEach(function(item) {
  item.style.fontStyle = "italic";
});

//4. En el article con la id="index" hay dentro una lista que ha perdido sus elementos. Te proporcionamos aquí el array con el texto de dichos elementos en orden; itera sobre la lista y ve creando los li necesarios con el texto apropiado: ["Introducción", "Biografía", "Obras"].
let indexList = document.querySelector("#index ul");
let indexItems = ["Introducción", "Biografía", "Obras"];
indexItems.forEach(function(item) {
  let li = document.createElement("li");
  li.textContent = item;
  indexList.appendChild(li);
});

//5. Todos los elementos de las listas dentro de la section con las obras deben tener la clase "work-item".
let worksLists = document.querySelectorAll("#works-section ul");
worksLists.forEach(function(list) {
  let items = list.children;
  for (let i = 0; i < items.length; i++) {
    items[i].classList.add("work-item");
  }
});

//6. A todos los link del documento les faltan sus url. Aquí tienes un array con las mismas, en orden; itera sobre la lista y da a cada elemento su atributo href con la url correspondiente:
let links = document.querySelectorAll("a");
let urls = [
  "https://es.wikipedia.org/wiki/Generaci%C3%B3n_del_27",
  "https://es.wikipedia.org/wiki/Albert_Einstein",
  "https://es.wikipedia.org/wiki/John_Maynard_Keynes",
  "https://es.wikipedia.org/wiki/Marie_Curie",
  "https://es.wikipedia.org/wiki/Luis_Bu%C3%B1uel",
  "https://es.wikipedia.org/wiki/Rafael_Alberti",
  "https://es.wikipedia.org/wiki/Salvador_Dal%C3%AD"
];
for (let i = 0; i < links.length; i++) {
  links[i].setAttribute("href", urls[i]);
}

