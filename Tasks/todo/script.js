// code to receive data from the form

let entryform = document.querySelector("#entryform");

entryform.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title");
  let desc = document.querySelector("#description");

  let titlevalue = title.value;
  let descriptionvalue = desc.value;
  saveTodo(titlevalue, descriptionvalue);

  title.value = "";
  desc.value = "";
});
function addTodo(title, description) {
  let oldarray = getTodo();
  oldarray.push({ title, description });
  saveTodo(oldarray);
}
function saveTodo(todos) {
  localStorage.setItem("datas", JSON.stringify(todos));
  renderTodo();
}
function getTodo() {
  let localstoragedatas = localStorage.getItem("datas");
  let datasIOriginalFrom = JSON.parse(localstoragedatas);
  return datasIOriginalFrom ? datasIOriginalFrom : [];
}

function renderTodo() {
  let todoscontainer = document.querySelector("#todostask");
  todoscontainer.innerHTML = "";
  let localstoragedatas = getTodo();
  //   console.log(localstoragedatas);

  localstoragedatas.forEach((singletodo, index) => {
    let singletododiv = document.createElement("div");
    singletododiv.setAttribute("class", "tododiv");

    let todotitle = document.createElement("h1");
    let todoDesc = document.createElement("P");
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.setAttribute("onClick", `deleteTodo(${index})`);

    todotitle.innerText = singletodo.title;
    todoDesc.innerText = singletodo.description;
    singletododiv.appendChild(todotitle);
    singletododiv.appendChild(todoDesc);
    singletododiv.appendChild(deletebtn);
    todoscontainer.appendChild(singletododiv);
  });
}
function deleteTodo(index) {
  let olddata = getTodo();
  olddata.splice(index, 1);
  saveTodo(olddata);
}
window.addEventListener("load", renderTodo());
