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
let z = 0
let a, eraser;

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

setInterval(cycle, 2000);

eraser = () => {
    z++;
    a = z % 4
    if(a == 3) {
      desH.innerHTML = "";
      name.appendChild(desH);
    }
}

setInterval(eraser, 500);