console.log("Welcome to DOM style");

/* ----------------------------- start ----------------------------- */
const sections = document.querySelectorAll('section');
// console.log(sections);

for (const section of sections) {
    // console.log(section);
    section.style.marginBottom = '20px';
    section.style.paddingLeft = '30px';
}

const h1Headings = document.getElementsByTagName('h1');
// console.log(h1Headings);
for (const h1 of h1Headings) {
    h1.style.fontStyle = "italic";

}



/* ----------------------------- start ----------------------------- */
const allLiOfSalat = document.querySelectorAll('.salat-container li')[4];
console.log(allLiOfSalat.innerText);
allLiOfSalat.style.backgroundColor = 'lightgray';


/* for (const thirdLi of allLiOfSalat) {
    console.log(thirdLi.innerText);
} */



/* const myDream = document.getElementsByClassName("dream-container")[0];
console.log("\n\n");
console.log(myDream.innerText); */


/* ----------------------------- start ----------------------------- */
//same content done in differnt ways:
const liFinderByTagName = document.getElementsByTagName('li')[10];
console.log("\n\n");
console.log(liFinderByTagName.innerHTML);
liFinderByTagName.style.backgroundColor = 'lightgreen';

const liFinderByQuerySelector = document.querySelectorAll('li')[10];
console.log("\n\n");
console.log(liFinderByQuerySelector.innerHTML);
liFinderByQuerySelector.style.backgroundColor = 'lightblue';

const myDreamBig = document.querySelectorAll(".dream-container li")[1];
console.log("\n\n");
console.log(myDreamBig.innerText);
myDreamBig.style.backgroundColor = 'lightcoral';

const myHardworking = document.getElementById("work-hard");
console.log("\n\n");
console.log(myHardworking.innerText);
myHardworking.style.backgroundColor = 'lightgray';

const setStyleAttribute = document.getElementById("work-hard").setAttribute("style", "background-color:lightgreen");
console.log("\n\n");
console.log(setStyleAttribute);

const myHardwork = document.getElementsByClassName("hardwork")[0];
console.log("\n\n");
console.log(myHardwork.innerText);
myHardwork.style.backgroundColor = 'wheat';



/* ----------------------------- start ----------------------------- */
const getClass = document.getElementsByClassName("hardwork")[0];
const result = getClass.getAttribute("id");
console.log(result);

const getAttribute = document.getElementsByClassName("hardwork")[0].getAttribute("id");
console.log("\n\n");
console.log(getAttribute);

const getAttAgain = document.getElementById("work-hard").getAttribute("class");
console.log("\n\n");
console.log(getAttAgain);


const setTitleAttribute = document.getElementById("work-hard").setAttribute("title", "Work hard suzan!!! No way!!!");
console.log("\n\n");











