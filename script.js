var style = document.createElement("style");
var hide;

function HideScrollbar() {
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  hide = document.head.appendChild(style);
}

function resetStyle() {
  style.innerHTML = `body::-webkit-scrollbar {display: block;}`;
  document.head.removeChild(hide);
}

// --------------------------------------------------------------------------------------------
