"use strict";

const colors = ["#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4",
"#F0FFFF", "#000000", "#FFEBCD", "#0000FF", "#8A2BE2",
"#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E",
"#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00008B",
"#A9A9A9", "#666666", "#BDB76B", "#8B008B", "#A9A9A9",
"#00FFFF", "#006400", "#BDB76B", "#8B008B", "#556B2F",
"#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F"];

const btn = document.getElementById("randomcolorBtn");
const color = document.querySelector("#color");

btn.addEventListener("click", function() {
   document.body.style.backgroundColor = colors[randomColor()];
   color.textContent = colors[randomColor()];
})

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}