"use strict";

let tab = "&emsp;&emsp;";
let text = null;
let st_word = null;

function translST_RU(){
  if(document.getElementById("description")){
     document.getElementById("description").remove();
  }
  let obj = document.getElementById("main_input");
  text = (obj.value).toLowerCase();
  console.log("text input: " + text);
  let words = text.split(" ");
  let length = words.length;
  console.log("text length: " + length);
  mainLogic(text, length, words);
}
let recu = 0;

function mainLogic(text, length, words){
  if(text.includes("а") || text.includes("о") || text.includes("у") ||text.includes("ы") || text.includes("е") || text.includes("ю") || text.includes("ё") || text.includes("я")){
    text = findKey(text);
    console.log(text);
    if(text == undefined){
      let p = document.createElement("p");
      p.id = "description";
      p.innerHTML = "Слово не найдено!";
      document.body.append(p);
    }
  }

  let foundW = find(text);
  let div = document.createElement("div");
  div.id = "description";
  if(foundW["~"] != undefined){
    let txt = null;
    if(foundW["pron"] != undefined){
      txt = "мест.";
    }
    else if(foundW["prep"] != undefined){
      txt = "пред.";
    }
    else if(foundW["num"] != undefined){
      txt = "числ.";
    }
    else{
      txt = "сущ.";
    }
    let p1 = document.createElement("p");
    p1.innerHTML = st_word + tab + "<i>" + txt + "</i>" + tab + foundW["~"];
    div.appendChild(p1);
  }
  //********************
  let p2 = document.createElement("p");
  p2.innerHTML = st_word + "&#127294;" + tab + "<i>" + "прил." + "</i>";
  div.appendChild(p2);

  let p3 = document.createElement("p");
  p3.innerHTML = st_word + "&#127284;" + tab + "<i>" + "глаг." + "</i>";
  div.appendChild(p3);

  let p4 = document.createElement("p");
  p4.innerHTML = st_word + "&#127280;" + tab +  "<i>" + "наречие" + "</i>";
  div.appendChild(p4);

  let p5 = document.createElement("p");
  p5.innerHTML = st_word + "&#127294;&#127293;" + ", ar " + st_word + "&#127294;&#127293;" + ", ap " + st_word + "&#127294;&#127293;" + tab + "<i>" + "прич." + "</i>";
  div.appendChild(p5);
  //********************

  let table = document.createElement("table");
  table.innerHTML = "<caption>Изменение глагола по базовым временам</caption>";
  let tr1 = document.createElement("tr");

  tr1.innerHTML = "<th>Время</th><th>Глагол</th>";
  let tr2 = document.createElement("tr");
  tr2.innerHTML = "<td>Bazo Ĉolero</td><td><b>Ar </b>"+st_word+"e</td>";
  let tr3 = document.createElement("tr");
  tr3.innerHTML = "<td>Bazo Stanjaro</td><td>"+st_word+"e</td>";
  let tr4 = document.createElement("tr");
  tr4.innerHTML = "<td>Bazo Duâro</td><td><b>Ap </b>"+st_word+"e</td>";
  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  table.appendChild(tr4);
  div.appendChild(table);
  document.body.append(div);
}

function find(txt){
  let obj = window.dict[txt];

  if(obj == undefined & recu != 3){
    let position = txt.length;
    let ntext = txt.substring(0,position - 1) + txt.substring(position, txt.length);
    recu++;
    console.log(ntext);
    return find(ntext);
  }
  else if(recu == 3){
    console.log("Слово не найдено!");
    recu=0;
    let div = document.createElement("div");
    div.id = "description";
    let p = document.createElement("p");
    p.innerHTML = "Слово не найдено!";
    div.appendChild(p);
    document.body.append(div);
  }
  else{
    st_word = txt;
    return obj;
  }
}
function findKey(txt){
  for (var key in window.dict){
    //if(window.dict[key]["~"] == txt) return key;
    let str = window.dict[key]["~"];
    if(str.includes(txt)) return key;
  }
}