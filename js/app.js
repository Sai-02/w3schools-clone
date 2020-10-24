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
      b[i].style.borderLeft = "solid 4px rgb(85, 179, 98)";
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
      b[i].style.borderLeft = "none";
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

// Login window pop up effect

document.getElementById("login-btn").addEventListener("click", ShowLoginWindow);
document
  .getElementById("close-login-window")
  .addEventListener("click", ShowLoginWindow);
let login_check = 0;
function ShowLoginWindow() {
  let loginWindow = document.getElementById("login-window");
  if (loginWindow.style.display == "none" || login_check == 0) {
    loginWindow.style.display = "grid";
    login_check = 1;
  } else {
    loginWindow.style.display = "none";
  }
}

//Tutorial Window Pop up effect

document
  .getElementById("tutorial-window-open")
  .addEventListener("click", ShowTutorialWindow);
document
  .getElementById("close-tutorial-window")
  .addEventListener("click", ShowTutorialWindow);
let tutorial_check = 0;
let tutorialIcon = document.getElementById("tutorial-window-icon");
function ShowTutorialWindow() {
  let tutorialWindow = document.getElementById("tutorial-window");
  if (tutorialWindow.style.display == "none" || tutorial_check == 0) {
    tutorialWindow.style.display = "grid";
    tutorial_check = 1;
    tutorialIcon.className = "fas fa-caret-up";
  } else {
    tutorialWindow.style.display = "none";
    tutorialIcon.className = "fas fa-caret-down";
  }
}

//Reference Window Pop up effect

document
  .getElementById("reference-window-open")
  .addEventListener("click", ShowReferenceWindow);
document
  .getElementById("close-reference-window")
  .addEventListener("click", ShowReferenceWindow);
let reference_check = 0;
let referenceIcon = document.getElementById("reference-window-icon");
function ShowReferenceWindow() {
  let referenceWindow = document.getElementById("reference-window");
  if (referenceWindow.style.display == "none" || reference_check == 0) {
    referenceWindow.style.display = "grid";
    reference_check = 1;
    referenceIcon.className = "fas fa-caret-up";
  } else {
    referenceWindow.style.display = "none";
    referenceIcon.className = "fas fa-caret-down";
  }
}

// Examples Window pop-up effect

document
  .getElementById("examples-window-open")
  .addEventListener("click", ShowExamplesWindow);
document
  .getElementById("close-examples-window")
  .addEventListener("click", ShowExamplesWindow);
let examples_check = 0;
let examplesIcon = document.getElementById("examples-window-icon");
function ShowExamplesWindow() {
  let examplesWindow = document.getElementById("examples-window");
  if (examplesWindow.style.display == "none" || examples_check == 0) {
    examplesWindow.style.display = "grid";
    examples_check = 1;
    examplesIcon.className = "fas fa-caret-up";
  } else {
    examplesWindow.style.display = "none";
    examplesIcon.className = "fas fa-caret-down";
  }
}
