console.log("Nodelist, parentNode, childNodes,  createElement,appendChild");



/* ----------------------------- start ----------------------------- */
const myDreamUL = document.querySelector(".dream-container ul");
console.log(myDreamUL);

const showParentNode = myDreamUL.parentNode.innerHTML;
console.log(showParentNode);

const childNodes = myDreamUL.childNodes[3].childNodes[0];
console.log(childNodes);

const childNodesExplore =
    myDreamUL.childNodes[3].nextSibling.nextSibling.nextSibling.nextSibling
        .previousSibling.previousSibling;
console.log(childNodesExplore);

const children = myDreamUL.children[2].children;
console.log(children);



/* ----------------------------- start ----------------------------- */
//createElement li
console.log("\n");
console.log(myDreamUL.innerHTML);

const newLi = document.createElement("li");
newLi.innerText = "Never Give Up";
console.log(newLi);

const finalLi = myDreamUL.appendChild(newLi);
console.log(finalLi);



/* ----------------------------- start ----------------------------- */
//createElement li

const liNew = document.createElement("li");
liNew.innerText = "Do not waste a single time!!!"
console.log("\n");
console.log(liNew);

const salatContainer = document.querySelector(".salat-container ul");
salatContainer.appendChild(liNew);


