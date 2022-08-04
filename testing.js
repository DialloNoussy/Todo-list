// var items = JSON.parse(localStorage.getItem("todo-list")) || [];

// function addItem() {
//   var inputBox = document.querySelector("#todo-input");
//   var item = inputBox.value;

//   if (item === "") return alert("You need to put in a number");

//   items.push({
//     value: item,
//     time: new Date().toLocaleDateString("en-US"),
//   });

//   localStorage.setItem("todo-list", JSON.stringify(items));

//   listItems();

//   inputBox.value = "";
// }

// function deleteItem(index) {
//   items.splice(index, 1);
//   localStorage.setItem("todo-list", JSON.stringify(items));
//   listItems();
// }

// function markAsDone(index) {
//   items[index].done = !items[index].done;
//   localStorage.setItem("todo-list", JSON.stringify(items));
//   listItems();
// }

// function listItems() {
//   var list = "";
//   for (var i = 0; i < items.length; i++) {
//     list += "<li class=" + (items[i].done ? "done" : "") + ">";
//     list += items[i].value + " ";
//     list +=
//       "<small title='click me to mark as done' class='label' onclick='markAsDone(" +
//       i +
//       ")'>" +
//       items[i].time +
//       "</small> ";
//     list +=
//       "<span class='label alert' onclick='deleteItem(" +
//       i +
//       ")'>delete</span></li>";
//   }
//   document.querySelector("#list-items").innerHTML = list;
// }

// (function () {
//   listItems();
// })();
<body>
    <div class="container">
      <div class="testPos">
        <h1 class="tilte1">📝 MY TO DO LISTE</h1>
        <p class="paragraph">Add your Task</p>
        <div class="input">
          <input
            type="text"
            id="myplace"
            placeholder="Ecrivez votre tâche (max 40 chars)"
            maxlength="40"
          />
          <button id="btnAdd">➕add</button>
        </div>
        <h2 class="title">HAS TO BE DONNE</h2>
      </div>
      <div class="rowtasks"></div>
      <!-- <h2>Eat</h2>
        <div class="btns">
          <button id="btndone">Done✅</button>
          <button id="btndel">Delete❌</button>
        </div> -->
    </div>
  </body>
  <script src="./script.js"></script>
</html>
   


@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,500;1,400&family=Uchen&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.tilte1 {
  text-decoration: underline rgb(130, 50, 205);
  text-align: center;
  color: #555;
  font-size: 50px;
}

body {
  background: url("https://thumbs.dreamstime.com/b/gare-li%C3%A8ge-guillemins-la-nuit-28329301.jpg")
    no-repeat;
  /* overflow: hidden; */
}
.container {
  width: 700px;
  margin: 3% auto;
  background-color: rgba(235, 237, 239, 0.3);
  border-radius: 10px;
  padding: 0px;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
}

.input {
  display: flex;
  justify-content: space-between;
}
#myplace {
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: default;
  border-radius: 200px;
  outline: none;
  border: 1px solid black;
  color: chocolate;
  font-family: cursive;
  font-size: 1em;
}

.mylist {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  color: #555;
  background: #cccccc;
  padding: 5px;
  border-radius: 10px;
  text-transform: capitalize;
}
#btnAdd {
  color: black;
  background: rgb(64, 51, 241);
  cursor: pointer;
  border-radius: 100px;
  max-width: 200%;
  min-width: 20%;
  font-family: fantasy;
  border-color: rgb(17, 55, 144);
  border: 1px solid black;
}
.title {
  margin-top: 10px;
  padding: 10px;
  text-decoration: underline overline dashed rgb(135, 50, 205);
  font-size: 30px;
  font-family: fantasy;
  color: #555;
}
.paragraph {
  margin-top: 10px;
  padding: 20px;
  text-decoration: underline dashed rgb(135, 50, 205);
  font-size: 30px;
  font-family: fantasy;
  color: cyan;
  color: red;
}
#btndone {
  border-radius: 200px;
  max-width: 200%;
  min-width: 40%;
  padding: 10px;
  cursor: pointer;
  background: rgb(76, 74, 219);
  font-family: fantasy;
  border-color: rgb(244, 174, 211);
  border: 1px solid black;
}
#btndel {
  border-radius: 500px;
  max-width: 100%;
  min-width: 40%;
  padding: 10px;
  cursor: pointer;
  background: rgb(220, 12, 12);
  font-family: fantasy;
  border-color: rgb(240, 177, 211);
  border: 1px solid black;
}

#btnAdd:hover,
#btndel:hover,
#btndone:hover {
  background-color: blueviolet;
}
input[type="checkbox"] {
  background: blue;
}

.testPos {
  position: sticky;
  top: 0px;
  background: #ccc;
}

.hid {
  display: none;
}

.th {
  text-decoration: line-through;
}
