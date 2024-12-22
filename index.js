const note = document.querySelector(".notes");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
function show() {
  note.innerHTML = localStorage.getItem("notes");
}
show();
function update() {
  localStorage.setItem("notes", note.innerHTML);
}

createbtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  note.appendChild(inputBox).appendChild(img);
});

note.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    update();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        update();
      };
    });
  }
});
