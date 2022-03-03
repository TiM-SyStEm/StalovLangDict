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
  // word mode
  if(length == 1){
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
      p1.innerHTML = "<i>" + txt + "</i>" + tab + foundW["~"];
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
    p5.innerHTML = st_word + "&#127294;&#127293;&#127294;" + ", " + st_word + "&#127280;&#127297;&#127294;" + ", " + st_word + "&#127280;&#127295;&#127294;" + tab + "<i>" + "прич." + "</i>";
    div.appendChild(p5);
    
    let p6 = document.createElement("p");
    p6.innerHTML = st_word + "&#127294;&#127293;&#127294;" + ", " + st_word + "&#127280;&#127297;&#127294;" + ", " + st_word + "&#127280;&#127295;&#127294;" + tab + "<i>" + "дееприч." + "</i>";
    div.appendChild(p6);
    //********************

    let table = document.createElement("table");
    table.innerHTML = "<caption>Изменение глагола по базовым временам</caption>";
    let tr1 = document.createElement("tr");

    tr1.innerHTML = "<th>Время</th><th>Глагол</th>";
    let tr2 = document.createElement("tr");
    tr2.innerHTML = "<td>Bazo Ĉoliro</td><td>"+st_word+"<b>ar</b></td>";
    let tr3 = document.createElement("tr");
    tr3.innerHTML = "<td>Bazo Stanjaro</td><td>"+st_word+"<b>on</b></td>";
    let tr4 = document.createElement("tr");
    tr4.innerHTML = "<td>Bazo Duâro</td><td>"+st_word+"<b>ap</b></td>";
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    div.appendChild(table);
    let table2 = document.createElement("table");
    table2.innerHTML = "<caption>Изменение причастия и деепричастия по базовым временам</caption>";
    let tr1_2 = document.createElement("tr");
    tr1_2.innerHTML = "<th>Время</th><th>Причастие</th><th>Деепричастие</th>";
    let tr2_2 = document.createElement("tr");
    let tr3_2 = document.createElement("tr");
    let tr4_2 = document.createElement("tr");
    let ptext = "";
    let dtext = "";
    ptext=st_word+"<b>aro</b>";
    dtext=st_word+"<b>ara</b>";
    tr2_2 = document.createElement("tr");
    tr2_2.innerHTML = "<td>Bazo Ĉoliro</td><td>"+ptext+"</td><td>"+dtext+"</td>";
    ptext=st_word+"<b>ono</b>";
    dtext=st_word+"<b>ona</b>";
    tr3_2 = document.createElement("tr");
    tr3_2.innerHTML = "<td>Bazo Stanjaro</td><td>"+ptext+"</td><td>"+dtext+"</td>";
    ptext=st_word+"<b>apo</b>";
    dtext=st_word+"<b>apa</b>";
    tr4_2 = document.createElement("tr");
    tr4_2.innerHTML = "<td>Bazo Duâro</td><td>"+ptext+"</td><td>"+dtext+"</td>";
    table2.appendChild(tr1_2);
    table2.appendChild(tr2_2);
    table2.appendChild(tr3_2);
    table2.appendChild(tr4_2);
    div.appendChild(table2);
    if(foundW["exa"] != undefined & foundW["exaru"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = "<b>" + foundW["exa"] + "<br/>" + foundW["exaru"] + "</b>";
      div.appendChild(p2);
    }
    document.body.append(div);
  }
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