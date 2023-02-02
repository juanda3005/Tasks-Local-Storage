
import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

//Evento
btn.addEventListener("click", addTask);

displayTasks();
//Date storage

//El formato de fechas puede cambiar dependiendo el nagedor utilizado
//Momentjs me ayuda a estandarizar el formato
//Busco CDNJS y ahi busco momentjs
//lo selecciono y copi el enlace y lo pego como un script en index.html
//Tambien se puede hacer la API del navegador instanciando diferentes objetos y usando sus funciones

//Los datos de la steareas y sus fechas  se almacenaran usando una API del navegador
//Se puede usar sessionStorage o local Storage, la primera permite almacenar asi se recargue pero no si se cierra la pestañar, la segunda almacena asi se cierre la pestaña

//LocalStorage
//Para almacenar datos en el navegador se usa el objeto localStorage

//El navegador espera un dato tipo string y le estoy enviando un objeto asi que requiero convertirlo y puedo usar JSON.stringyfy

//Creo una lista y con el metodo push le agrego cada registro para que este no se sobreescriba

////Creo una lista para que no se sobreescriba el objeto en el almacenamiento, podria ser tambien taskList=[]
//const taskList = JSON.parse(localStorage.//getItem("tasks")) || []; //nombre de la llave que quiero obtener
//al abrir la pagina al hacer push en getitem saca null ya que no se esta agregando ninguna tarea por eso el || para que se convierta en un arreglo y el parse es para convertir el string en un objeto

//Cargar el icono de completado en la tarea, puedo usar la libreria uuid la cual permite cerar un identificador unico, puede ser en CDNJS y pegar script en index,html