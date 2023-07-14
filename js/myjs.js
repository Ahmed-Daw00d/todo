var text;
function add() {
  text = document.querySelector("input[type=text]");
  if (text.value != "") {
    var textLi = document.createTextNode(text.value);
    var el = document.createElement("li");
    el.appendChild(textLi);
    var list = document.getElementById("list");
    document.querySelector("button").style.backgroundColor = "rgb(253,125,0)";
    list.appendChild(el);
    text.value = "";
  } else {
    alert("شكلك جاي تهزر🤔🤨اكتب حاجه ياعم😁");
    document.querySelector("button").style.backgroundColor = "red";
  }
}
