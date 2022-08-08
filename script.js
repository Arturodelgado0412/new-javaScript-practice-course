/*document.querySelector('') es una función que hay que enviarle el selector en un string, cuando vamos a tomar un elemento que no tiene clase ni id nos vale usar esta función y si quiere coger una clase o id con esta función lo hacemos como en css agregando el '.' o '#'*/

/*Crea una lista de los elementos dentro de cada una de estas etiquetas
const p = document.querySelectorAll('p')

console.log(input.value);

console.log({
    h1,
    parrafito,
    pid,
    input,
});

innerHTML permite modificar el html de la etiqueta seleccionada, usando html
h1.innerHTML = 'La vida es dura <br/> pero es más dura la verdura'

innerText este convierte el texto html pero sin convertir todo a html a diferencia de innerHTML
h1.innerText = 'La vida es dura <br/> pero es más dura la verdura'

Trae atributos o clases y leerlos
console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));

Permite cambiar la clase del atributo aunque en html es verde la clase aqui la cambiamos por rojo
h1.setAttribute('class', 'rojo');

Podemos agregarle una clase nueva a la etiqueta elegida
h1.classList.add('azul');

Podemos eliminar una de las clases de la etiqueta elegida
h1.classList.remove('rojo');

h1.classList.toggle('verde'); MIRAR ESTE
h1.classList.contains('verde); MIRAR ESTE

Modificar el value de los input desde JS
input.value = "0"

Crea un elemento HTML desde 0 desde JS

const img = document.createElement('img');
img.setAttribute('src', 'https://www.freecodecamp.org/espanol/news/content/images/2020/12/arrays_methods.jpeg')
console.log(img)

pid.innerHTML = "";
pid.append(img);*/

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


function btnOnClick(){
    const sumaInputs = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText = 'Resultado: ' + sumaInputs;
}