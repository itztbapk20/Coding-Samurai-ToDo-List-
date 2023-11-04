let inputs = document.querySelector("#task");
let text = document.querySelector("#todos");

function Add() {
  if (inputs.value == "") {
    alert("Please Enter Some Task_")
  } else {
    let newElement = document.createElement("li");
    newElement.innerHTML = `${inputs.value}   <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newElement);
    inputs.value = "";
    newElement.querySelector("i").addEventListener("click" , remove =>{
      newElement.remove();
    })
  }
}
