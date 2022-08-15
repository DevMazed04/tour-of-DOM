console.log("\n\n\n\n\ncreate a new section element");

/* ------------ create a full Section using createElement: manually ------------ */

const mainContainer = document.querySelector("main");
// console.log(mainContainer);

const mySection = document.createElement("section");
mainContainer.appendChild(mySection);
// console.log("\n");
// console.log(mySection);

const h1 = document.createElement("h1");
h1.innerText = "My Web-Development Journey";
mySection.appendChild(h1);
// console.log(h1);

const h3 = document.createElement("h3");
h3.innerText = "Learning topics so far";
mySection.appendChild(h3);

const myUL = document.createElement("ul");
mySection.appendChild(myUL);
// console.log(myUL);

const myLi1 = document.createElement("li");
myLi1.innerText = "HTML5";
myUL.appendChild(myLi1);

const myLi2 = document.createElement("li");
myLi2.innerText = "CSS3";
myUL.appendChild(myLi2);

const myLi3 = document.createElement("li");
myLi3.innerText = "Boootstrap5";
myUL.appendChild(myLi3);

const myLi4 = document.createElement("li");
myLi4.innerText = "JavaScript";
myUL.appendChild(myLi4);

/* ------ adding some style in this section by JS ------ */
mySection.style.border = "2px dotted green";
mySection.style.paddingLeft = "30px";
mySection.style.margin = "30px 0 0 30px";
mySection.style.borderRadius = "10px";
mySection.style.background = "lightgray";

h1.style.color = "green";
h3.style.color = "darkred";

myLi4.style.fontStyle = "italic";
myLi4.style.fontWeight = "bold";
myLi4.style.color = "blue";

// console.log(mySection);

/* ------------ create a full Section using innerHTML: directly ------------ */
const newSection = document.createElement("section");
console.log(newSection);
newSection.innerHTML = `
<h1>About Jannat</h1>
<h3>Some Jannat Names</h4>
<ul> 
<li>Jannat al Adan</li>
<li>Jannatul Ferdaus</li>
<li>Jannat-ul-Mawa</li>
<li>Jannat-an-Naim</li>
<li>Dar al-maqama</li>
<li>Dar al-salam</li>
<li>Dar al-Akhirah</li>
</ul>
`;
mainContainer.appendChild(newSection);
