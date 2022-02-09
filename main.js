"use strict";

let tab = "&emsp;&emsp;";

function translST_RU(){
  if(document.getElementById("description")){
     document.getElementById("description").remove();
  }
  let obj = document.getElementById("main_input");
  let text = obj.value;
  console.log("text input: " + text);
  let words = text.split(" ");
  let length = words.length;
  console.log("text length: " + length);
  
  if(document.getElementById("ru_st").checked){
    console.log("ru-st");
    // word mode
    if(length == 1){
      console.log(findRU(text));
    }
  }
  else{
    consol.log("st-ru");
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
      document.body.append(div);
    }
  }
}
let recu = 0;
function find(txt){
  let obj = window.dict[txt];

  if(obj == undefined & recu != 3){
    let position = txt.length;
    let ntext = txt.substring(0,position - 1) + txt.substring(position, txt.length);
    recu++;
    return find(ntext);
  }
  else if(recu == 3){
    console.log("Слово не найдено!");
    recu=0;
  }
  else{
    return obj;
  }
}
