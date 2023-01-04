function myFunction() {
  let tab = document.getElementById("myLinks");
  if (tab.style.display === "block") {
    tab.style.display = "none";
  } else {
    tab.style.display = "block";
  }
}

let name = document.querySelector(".name2");
let desH = document.createElement('h1');
let des = document.createAttribute("class");
let myDes = ["Programmer", "Developer", "Student", "Athlete"];
let i = -1;
let s, z, a = 0
let b, eraser;

cycle = () => {
  i++;
  if (i >= myDes.length) {
    i = 0;
  }
  des.value = "description";
  desH.setAttributeNode(des);
  desH.innerHTML = `${myDes[i]}`
  name.appendChild(desH);
}

setInterval(cycle, 3000);

eraser = () => {
  z++;
  b = z % 6
  if (b == 5) {
    desH.innerHTML = "";
    name.appendChild(desH);
  }
}

setInterval(eraser, 500);

let f = document.getElementById('mySidebar').style.width = '0px';

open = () => {
  if (document.getElementById('mySidebar').style.width == '0px') {
    document.getElementById('closebtn').style.display = 'none';
  }
  if (document.getElementById('mySidebar').style.width > '0px') {
    document.getElementById('closebtn').style.display = 'unset';
  }
}

setInterval(open, 1);
  
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "30%";
  document.getElementById("main").style.marginRight = "30%";
  document.getElementById('closebtn').style.right = "30%";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById('closebtn').style.marginRight = "0px";
}