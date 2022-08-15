console.log("\n\n\n\n\ncreate a new section element");


/* ------------ createElement a full Section: ------------ */
const mySection = document.createElement("section");
console.log("\n");
console.log(mySection);

const mainContainer = document.querySelector("main");
// console.log(mainContainer);
mainContainer.appendChild(mySection);

const h1 = document.createElement("h1");
h1.innerText = "My Web-Development Journey";
// console.log(h1);
mySection.appendChild(h1);

const h3 = document.createElement("h3");
h3.innerText = "Learning topics so far";
mySection.appendChild(h3);

const myUL = document.createElement("ul");
// console.log(myUL);
mySection.appendChild(myUL);

const myLi1 = document.createElement("li");
myLi1.innerText = "HTML5";
const myLi2 = document.createElement("li");
myLi2.innerText = "CSS3";
const myLi3 = document.createElement("li");
myLi3.innerText = "Boootstrap5";
const myLi4 = document.createElement("li");
myLi4.innerText = "JavaScript";

myUL.appendChild(myLi1);
myUL.appendChild(myLi2);
myUL.appendChild(myLi3);
myUL.appendChild(myLi4);


/* ------ adding some style in this section by JS ------ */
mySection.style.border = "2px dotted green";
mySection.style.paddingLeft = "30px";
mySection.style.margin = "30px 0 0 30px";
mySection.style.borderRadius = "10px";
mySection.style.background = "lightgray";

h1.style.color = "green";
h3.style.color = "darkred";

myLi4.style.fontStyle = 'italic';
myLi4.style.fontWeight = 'bold';
myLi4.style.color = 'blue';

// console.log(mySection);







