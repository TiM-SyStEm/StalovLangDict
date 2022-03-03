let dict_len = document.createElement("p");
dict_len.innerHTML = (Object.keys(window.dict).length).toString() + " слов в словаре";
dict_len.id = "words_len";
document.body.append(dict_len);