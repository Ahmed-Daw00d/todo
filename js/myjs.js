var text;
let toDo = [];

function add() {
  text = document.querySelector("input[type=text]");
  if (text.value != "") {
    var listUl = document.getElementById("list");
    var li = document.getElementsByTagName("li");

    //add text in arr
    toDo.push(text.value);

    for (let i = 0; i < toDo.length; i++) {
      // add get text from arr and add text to li
      var textLi = document.createTextNode(toDo[i]);
      var el = document.createElement("li");
      el.appendChild(textLi);
    }
    //add li in ul
    listUl.appendChild(el);
    //empty text box
    text.value = "";
    //css
    document.querySelector("button").style.backgroundColor = "rgb(253,125,0)";

    //  add button delete
    var btn = document.createElement("button");
    btn.innerHTML = '<i class="fa-solid fa-trash " style="color: #f00;"></i>';
    btn.classList.add("delete");
    //  add button complete
    var btnCom = document.createElement("button");
    btnCom.innerHTML = '<i class="fa-solid fa-thumbs-up " style="color: #0f0;"></i>';
    btnCom.classList.add("complete");
    //for to add button to li
    for (let i = 0; i < li.length; i++) {
      li[i].appendChild(btn);
      li[i].appendChild(btnCom);
    }
    // function to delete li
    btn.addEventListener("click", () => {
      listUl.removeChild(el);
    });

    //function complete
    btnCom.addEventListener("click",()=>{
     el.classList.toggle("liComplete");
    })
  } else {
    alert("شكلك جاي تهزر🤔🤨اكتب حاجه ياعم😁");
    document.querySelector("button").style.backgroundColor = "red";
  }
}

function Print() {
  window.print();
}
