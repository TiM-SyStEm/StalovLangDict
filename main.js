"use strict";

let tab = "&emsp;&emsp;";
let text = null;

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
    if(foundW["~o"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = text + "&#127294;" + tab + foundW["~o"];
      div.appendChild(p2);
    }
    if(foundW["~e"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = text + "&#127284;" + tab + foundW["~e"];
      div.appendChild(p2);
    }
    if(foundW["~a"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = text + "&#127280;" + tab + foundW["~a"];
      div.appendChild(p2);
    }
    if(foundW["~ono"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = text + "&#127294;&#127293;&#127294;" + tab + foundW["~ono"];
      div.appendChild(p2);
    }
    if(foundW["~aro"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = text + "&#127280;&#127297;&#127294;" + tab + foundW["~aro"];
      div.appendChild(p2);
    }
    if(foundW["~apo"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = text + "&#127280;&#127295;&#127294;" + tab + foundW["~apo"];
      div.appendChild(p2);
    }
    if(foundW["~ona"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = text + "&#127294;&#127293;&#127280;" + tab + foundW["~ona"];
      div.appendChild(p2);
    }
    if(foundW["~ara"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = text + "&#127280;&#127297;&#127280;" + tab + foundW["~ara"];
      div.appendChild(p2);
    }
    if(foundW["~apa"] != undefined){
      let p2 = document.createElement("p");
      p2.innerHTML = text + "&#127280;&#127295;&#127280;" + tab + foundW["~apa"];
      div.appendChild(p2);
    }
    if(foundW["~e"] != undefined){
      let table = document.createElement("table");
      table.innerHTML = "<caption>Изменение глагола по базовым временам</caption>";
      let tr1 = document.createElement("tr");

      tr1.innerHTML = "<th>Время</th><th>Глагол</th>";
      let tr2 = document.createElement("tr");
      tr2.innerHTML = "<td>Bazo Ĉoliro</td><td>"+text+"<b>ar</b></td>";
      let tr3 = document.createElement("tr");
      tr3.innerHTML = "<td>Bazo Stanjaro</td><td>"+text+"<b>on</b></td>";
      let tr4 = document.createElement("tr");
      tr4.innerHTML = "<td>Bazo Duâro</td><td>"+text+"<b>ap</b></td>";
      table.appendChild(tr1);
      table.appendChild(tr2);
      table.appendChild(tr3);
      table.appendChild(tr4);
      div.appendChild(table);
    }
    if(foundW["~ono"] != undefined || foundW["~ona"] != undefined ){
      let table = document.createElement("table");
      table.innerHTML = "<caption>Изменение причастия и деепричастия по базовым временам</caption>";
      let tr1 = document.createElement("tr");
      tr1.innerHTML = "<th>Время</th><th>Причастие</th><th>Деепричастие</th>";
      let tr2 = document.createElement("tr");
      let tr3 = document.createElement("tr");
      let tr4 = document.createElement("tr");
      if(foundW["~aro"] != undefined || foundW["~ara"] != undefined){
        let ptext = "-";
        let dtext = "-";
        if(foundW["~aro"] != undefined)
          ptext=text+"<b>aro</b>";
        if(foundW["~ara"] != undefined)
          dtext=text+"<b>ara</b>";
        tr2 = document.createElement("tr");
        tr2.innerHTML = "<td>Bazo Ĉoliro</td><td>"+ptext+"</td><td>"+dtext+"</td>";
      }
      if(foundW["~ono"] != undefined || foundW["~ona"] != undefined){
        let ptext = "-";
        let dtext = "-";
        if(foundW["~ono"] != undefined)
          ptext=text+"<b>ono</b>";
        if(foundW["~ona"] != undefined)
          dtext=text+"<b>ona</b>";
        tr3 = document.createElement("tr");
        tr3.innerHTML = "<td>Bazo Stanjaro</td><td>"+ptext+"</td><td>"+dtext+"</td>";
      }
      if(foundW["~apo"] != undefined || foundW["~apa"] != undefined){
        let ptext = "-";
        let dtext = "-";
        if(foundW["~apo"] != undefined)
          ptext=text+"<b>apo</b>";
        if(foundW["~apa"] != undefined)
          dtext=text+"<b>apa</b>";
        tr4 = document.createElement("tr");
        tr4.innerHTML = "<td>Bazo Duâro</td><td>"+ptext+"</td><td>"+dtext+"</td>";
      }
      table.appendChild(tr1);
      table.appendChild(tr2);
      table.appendChild(tr3);
      table.appendChild(tr4);
      div.appendChild(table);
    }
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
    text = txt;
    return obj;
  }
}