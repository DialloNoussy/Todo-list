let btnAdd = document.getElementById("btnAdd");
let input = document.getElementById("myplace");
let rowtasks = document.querySelector(".rowtasks");

rowtasks.addEventListener("click", function (e) {
  console.log(mylist);

  if (e.target.className === "btndel") {
    let ok = confirm("are you sure to delete");
    if (ok) {
      e.target.parentElement.parentElement.remove();
    }
  }
  if (e.target.className === "btndone") {
    e.target.innerHTML == "Done"
      ? (e.target.innerHTML = "Undo")
      : (e.target.innerHTML = "Done");
  }
});

let task = document.querySelector(".task");
let mylist = document.querySelector(".mylist");

btnAdd.addEventListener("click", function () {
  let v = input.value;
  if (input.value != "" && v.trim()) {
    let div = document.createElement("div");
    div.classList.add("mylist");
    div.innerHTML = `
   <h2 class="task">${input.value}</h2>
    <div class="bnts">
        <button id="btndone" class="btndone">Done</button>
        <button id="btndel" class="btndel">Delete</button>
    </div>
  `;

    rowtasks.appendChild(div);
    input.value = "";
  } else {
    alert("pas de string");
  }
});
