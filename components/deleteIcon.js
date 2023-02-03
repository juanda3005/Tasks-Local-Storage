import {displayTasks} from "./readTasks.js"
const deleteIcon = (id) => {
  const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon"); //aqui cada clase va separado por coma ,
  i.addEventListener("click", () => deleteTask(id));
  //en los evenlistener no se debe poner el parentesis de la función que da el comportameinto, NO deleteTask() ya que no funciona
  return i;
};

const deleteTask = (id) => {
  const li=document.querySelector("[data-list]")
  const tasks=JSON.parse(localStorage.getItem("tasks"));
  const index=tasks.findIndex((task)=>task.id===id);
  tasks.splice(index,1);//saco la tarea eliminada del arreglo
  li.innerHTML="";
  localStorage.setItem("tasks",JSON.stringify(tasks));
  displayTasks();
  // const parent=e.target.parentElement;//tomar el target el cual es el icono y muestra su elemento padre el cual es el li
  // parent.remove();//elimina el elemento padre
};

export default deleteIcon;
