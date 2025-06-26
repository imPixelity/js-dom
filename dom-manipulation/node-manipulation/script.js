// DOM Manipulation Node
// document.createElement() | document.createTextNode() | node.appendChild()
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("Paragraf Baru");
pBaru.appendChild(textPBaru);

const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// node.insertBefore()
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Item Baru");

liBaru.appendChild(textLiBaru);
const ulTarget = document.querySelector("#b ul");
const liTarget = ulTarget.querySelector("li:nth-child(2)");

ulTarget.insertBefore(liBaru, liTarget);

// parentNode.removeChild()
const liTargetRemove = ulTarget.querySelector("li:nth-child(3)");
ulTarget.removeChild(liTargetRemove);

// parentNode.replaceChild()
const liV2 = document.createElement("li");
const textLiV2 = document.createTextNode("Replace Item");
liV2.appendChild(textLiV2);

const liTargetReplace = ulTarget.querySelector("li:nth-child(3)");
ulTarget.replaceChild(liV2, liTargetReplace);
