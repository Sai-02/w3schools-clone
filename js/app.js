//Dark mode for codes

document
  .getElementById("dark-btn-container")
  .addEventListener("click", changeTheme);

function changeTheme() {
  let b = document.getElementsByClassName("code-box");
  let tagStart = document.getElementsByClassName("tagstart");
  let htmlTag = document.getElementsByClassName("html-tag");
  let docHtml = document.getElementsByClassName("docHtml");
  let cssPropertyName = document.getElementsByClassName("css-property-name");
  let cssPropertyValue = document.getElementsByClassName("css-property-value");
  let brown = document.getElementsByClassName("brown");
  let blue = document.getElementsByClassName("blue");
  if (b[0].style.color == "white") {
    for (let i = 0; i < b.length; i++) {
      b[i].style.backgroundColor = "white";
      b[i].style.color = "black";
    }
    for (let i = 0; i < tagStart.length; i++) {
      tagStart[i].style.color = "mediumblue";
    }
    for (let i = 0; i < htmlTag.length; i++) {
      htmlTag[i].style.color = "brown";
    }
    for (let i = 0; i < docHtml.length; i++) {
      docHtml[i].style.color = "red";
    }
    for (let i = 0; i < cssPropertyName.length; i++) {
      cssPropertyName[i].style.color = "red";
    }
    for (let i = 0; i < cssPropertyValue.length; i++) {
      cssPropertyValue[i].style.color = "blue";
    }
    for (let i = 0; i < brown.length; i++) {
      brown[i].style.color = "brown";
    }
    for (let i = 0; i < blue.length; i++) {
      blue[i].style.color = "blue";
    }
  } else {
    for (let i = 0; i < b.length; i++) {
      b[i].style.backgroundColor = "rgb(40,44,52)";
      b[i].style.color = "white";
    }
    for (let i = 0; i < tagStart.length; i++) {
      tagStart[i].style.color = "#88c999";
    }
    for (let i = 0; i < htmlTag.length; i++) {
      htmlTag[i].style.color = "#ff9999";
    }
    for (let i = 0; i < docHtml.length; i++) {
      docHtml[i].style.color = "#c5a5c5";
    }
    for (let i = 0; i < cssPropertyName.length; i++) {
      cssPropertyName[i].style.color = "#c5a5c5";
    }
    for (let i = 0; i < cssPropertyValue.length; i++) {
      cssPropertyValue[i].style.color = "#88c999";
    }
    for (let i = 0; i < brown.length; i++) {
      brown[i].style.color = "#88c999";
    }
    for (let i = 0; i < blue.length; i++) {
      blue[i].style.color = "#80b6ff";
    }
  }
}
