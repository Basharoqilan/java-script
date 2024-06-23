var text1 = document.getElementById("javascriptInput");
var span0 = document.getElementById("text");

function task() {
    let t = text1.value; 
    span0.textContent = t; 
}

text1.addEventListener("input", task);

let t = text1.value;
var span0 = document.getElementById("text");

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ comment:  text1.value })
})
.then((response) => {
  if (!response.ok)
    throw new Error(`there is an error ${response.status}`);

  return response.json();
})
.then(data => {
  console.log("sending data" + JSON.stringify(data))
  add()
  text1.value = '';
    span0.textContent = '';
    saveCommentInLocalStorage(text1.value);
})
.catch((err) => {
  console.error(`خطأ: ${err}`);
});


function add() {
  var text1 = document.getElementById("javascriptInput");
  var button = document.getElementById("addButton"); 
  var div1 = document.createElement("div");
  div1.textContent = text1.value;
  button.appendChild(div1);
}
