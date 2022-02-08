"use strict";

function translST_RU(){
  let obj = document.getElementById("main_input");
  let text = obj.value;
  console.log("text input: " + text);
  let words = text.split(" ");
  let length = words.length;
  console.log(length);
}