const checkComplete = (id) => {
  const check = document.createElement("i");
  check.classList.add("far", "fa-check-square", "icon");
  //le agrego la clase al icono
  check.addEventListener("click", (e)=>completeTask(e,id));
  return check;
};

//Immediately invoked function expression IIFE
//Son funciones que al declarse se ejecutan
//(()=>{contenido del codigo y sus funciones}())
//al llmar las funciones en la terminal dan error pero estas siguen funcionando perfectamente, (protege el codigo)

const completeTask=(e,id)=>{
  //target es el elemento, aqui representa el icono check
  const element=e.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");//le agrega el color azul al icono 
  element.classList.toggle("far");

  // El método toggle permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible. 

  //Identificadores de cada tarea

  console.log("check id",id);
  const tasks=JSON.parse(localStorage.getItem("tasks"));
  //Encuentro la posicion en el arreglo de localstroage donde esta el id
  const index=tasks.findIndex(item=>item.id==id);
  console.log(index);
  //Accedo a la llave complete para cambiarla de false a true dependidendo del click en el check
  tasks[index]["complete"]=!tasks[index]["complete"]//en la posicion index accedo a complete y la niego (si está en true pasar a flse y visesersa)
  localStorage.setItem("tasks",JSON.stringify(tasks));
  console.log(tasks);

};
export default checkComplete;
