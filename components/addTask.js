import deleteIcon from "./deleteIcon.js";
import checkComplete from "./checkComplete.js";
import { displayTasks } from "./readTasks.js";
import { uniqueDates } from "../services/date.js";

const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //convierto la tarea almacenada en string a objeto y uso el pipe para usar el push por primera vez

export const addTask = (e) => {
  e.preventDefault();
  //En esta funcion estan los datos ingresados por el usuario y la lista que los almacena en su conjunto
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value;
  input.value = "";
  const date = calendar.value;
  calendar.value = "";
  const dateFormat = moment(date).format("DD/MM/YYYY");

  //Condicion para campos vacios
  if (value === "" || dateFormat === "") {
    return; //este reurn impide que se ejecute el codigo de abajo
  }

  //Guardar el estado del check
  const complete = false;

  //Almacenamiento en el navegador
  const taskOb = {
    value,
    dateFormat,
    complete,
    id: uuid.v4(),
  };

  list.innerHTML = ""; //limpio la lista para que no se repitan las clasificaciones de las fechas de las tareas nuevas, se borran y luego readTasks() muestra de nuevo las tareas almacenadas ene el local storage

  taskList.push(taskOb);
  // sessionStorage.setItem("task",JSON.stringify(taskOb));
  localStorage.setItem("tasks", JSON.stringify(taskList));
  //(nombre que le doy, data a almacenar)

  displayTasks(); //esta funcion ya tiene la logica de agregar la tarea que está abajo, pero ademas tiene la clasificación de las tareas por fechas

  // const task = createTask(taskOb);
  // list.appendChild(task);
  // //lista es el elemento padre y le agrego un hijo que es task
  // //esta funcion se puede omitir e incluir el codigo tal cual en createTask
};

export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement("li");
  task.classList.add("card"); //le agrego la clase al elmento
  const dateTask = document.createElement("span");
  dateTask.classList.add("date");
  dateTask.innerText = dateFormat;

  //Contenido de la lista
  const taskContent = document.createElement("div");

  const check = checkComplete(id);
  //Cargar el icono de completado en la tarea segun el localstorage
  if (complete) {
    check.log("Tarea completada");
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon"); //le agrega el color azul al icono
    check.classList.toggle("far");
  }
  //uso la libreria

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  task.appendChild(taskContent);
  task.appendChild(dateTask);
  task.appendChild(deleteIcon(id)); //el icono se pone en task ya que no va dentro del div, va en el extremo derecho del li
  return task;
};
