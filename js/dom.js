// console.log("hello! welcome to DOM with js");
// // console.log(document.body);

// /* ----------------------------- Start ----------------------------- */

// //getElementsByTagName()
// const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

// for (const li of liCollection) {
//     console.log(li.innerText);
// }


// const headingCollection = document.getElementsByTagName('h1');
// console.log(headingCollection);

// for (const h1 of headingCollection) {
//     console.log(h1);
// }
// /* ----------------------------- End ----------------------------- */



// /* ----------------------------- Start ----------------------------- */

// //getElementById()
// const myFamily = document.getElementById("my-family");
// console.log(myFamily);
// console.log(myFamily.innerText);

// myFamily.innerText = 'My Family with Love';
// console.log(myFamily.innerText);
// //-----------------------------//

// //getElementsByClassName()
// const members = document.getElementsByClassName("members");
// console.log(members);

// for (const member of members) {
//     console.log(member);
//     console.log(member.innerText);
// }


// const mines = document.getElementsByClassName("mines");
// console.log(mines);

// for (const mine of mines) {
//     console.log(mine);
//     console.log(mine.innerText);
// }
// /* ----------------------------- End ----------------------------- */



// /* ----------------------------- start ----------------------------- */
// //QuerySelector()
// const salatAll = document.querySelector('.salat-container li');
// console.log(salatAll);
// console.log(salatAll.innerText, "\n\n");


// //QuerySelectorAll()
// const salatAllFive = document.querySelectorAll('.salat-container li');
// for (const salat of salatAllFive) {
//     // console.log(salat);
//     console.log(salat.innerText);
// }

// const querySelector = document.querySelectorAll("#my-dream");
// console.log(querySelector);
// console.log('\n\n');
// const myOnlyDream = document.getElementById("my-dream");
// console.log(myOnlyDream);
// /* ----------------------------- End ----------------------------- */



// /* ----------------------------- Start ----------------------------- */

// //Dynamic style set:
// const myDreamStyle = document.getElementById("my-dream");
// myDreamStyle.style.backgroundColor = 'powderblue';
// myDreamStyle.style.padding = '50px';
// myDreamStyle.style.width = '80%';
// myDreamStyle.style.marginTop = '100px';
// // document.getElementsByTagName("h1")[0].style.color = "yellow";


// //getAttribute()
// /* const myDream = document.getElementById("my-dream");
// const getIdAttribute = myDream.getAttribute('id');
// console.log(getIdAttribute); */
// const getDreamAttribute = document.getElementById("my-dream").getAttribute("class");
// console.log(getDreamAttribute);

// const myDream = document.getElementById("my-dream");
// const attClassList = myDream.classList;
// console.log(attClassList);

// myDream.classList.add("puradom");
// console.log(attClassList);
// myDream.classList.remove("dream-only-dream");
// console.log(attClassList)

// //setAttribute()
// const setAtt = document.getElementById("dom-nai").setAttribute("class", "dom-doma");
// console.log(setAtt);


// //innerHTML and innerText
// const myDreamOnly = document.getElementById("my-dream");
// console.log(myDreamOnly.innerHTML);
// console.log(myDreamOnly.innerText);






