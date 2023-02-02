export default (date)=>{
    const dateElement=document.createElement("li");
    dateElement.classList.add("dateup");
    dateElement.innerHTML=date;
    return dateElement;
}

