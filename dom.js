// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
para.classList.add("para1");
para.textContent = "Hey! I'm red.";
para.style.cssText = "color:red;"

const headingThree = document.createElement("h3");
headingThree.classList.add("color-blue");
headingThree.textContent = "I'm blue h3";
headingThree.style.cssText = "color:blue;"

const newDiv = document.createElement("div");
newDiv.classList.add("my-div");
newDiv.style.border = "1px solid black";
newDiv.style.backgroundColor = "pink";

const headingOne = document.createElement("h1");
headingOne.textContent = "I'm in a div."
const para2 = document.createElement("p");
para2.textContent = "ME TOO!"


container.appendChild(content);
container.appendChild(para);
container.appendChild(headingThree);
container.appendChild(newDiv);
newDiv.appendChild(headingOne);
newDiv.appendChild(para2)

