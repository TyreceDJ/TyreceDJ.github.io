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
    if(b == 5) {
      desH.innerHTML = "";
      name.appendChild(desH);
    }
}

setInterval(eraser, 500);