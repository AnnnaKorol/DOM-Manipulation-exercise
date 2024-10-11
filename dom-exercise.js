// 1) a <p> with red text that says “Hey I’m red!”

const container = document.querySelector("#container");
const content = document.createElement("p");
content.textContent = "Hey I’m red!";
content.style.color = "red";

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”


// 2) an <h3> with blue text that says “I’m a blue h3!”
const heading = document.createElement("h3");
heading.textContent = "I’m a blue h3!";
heading.style.color = "blue";
container.appendChild(heading);


// 3) a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”
//Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const containerInContainer = document.createElement("div");
containerInContainer.setAttribute("style", "border: black; background: pink;");
container.appendChild(containerInContainer);
const headingSecond = document.createElement("h1");
headingSecond.textContent = "I’m in a div";
containerInContainer.appendChild(headingSecond);
const paragraph = document.createElement("p");
paragraph.textContent = "ME TOO!";
containerInContainer.appendChild(paragraph);


const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e) {
    e.target.style.background = "blue";
});




