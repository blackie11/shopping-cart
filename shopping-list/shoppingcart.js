// console.dir(window.document);

// const secondItem = document.querySelector("li:nth-Child(2)");
// secondItem.style.color = "green";

// // changing the background of the document ui

// const changeBackground = document.querySelector("body");
// changeBackground.style.backgroundColor = "lightblue";
// console.log(secondItem);

// // function to create new item and add to the list
// function createNewItem(item) {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(item));
//   const button = createButton("remove-item btn-link text-red");

//   // append the button into the list item
//   li.appendChild(button);
//   return document.querySelector(".items").appendChild(li);
// }

// // function to create button with embedded icon
// function createButton(classes) {
//   const button = document.createElement("button");
//   button.className = classes;

//   const icon = createIcon("fa-solid fa-xmark");
//   button.appendChild(icon);
//   return button;
// }

// //  function to create the icon
// function createIcon(classes) {
//   const icon = document.createElement("i");
//   icon.className = classes;
//   return icon;
// }

// createNewItem("chesse");
// createNewItem("Eggs");

// function insertAfter(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);

//   return;
// }

// const li = document.createElement("li");
// li.textContent = "orange juice is the best";

// const firstItem = document.querySelector("li:nth-child(3)");

// insertAfter(li, firstItem);

// const clearBtn = document.querySelector(".btn-clear");
// const items = document.querySelectorAll("li");

// function clearItems() {
//   clearBtn.onClick = items.remove;
// }

// const clearBtn = document.querySelector("#clear");
// const items = document.querySelectorAll(".items");
// clearBtn.addEventListener("click", () => {
//   // Loop through each item and remove it
//   items.forEach((item) => {
//     item.remove();
//   });

//   console.log(items);

//   return;
// });

// to remove eventlistner we use the following method
// addEventListener

// const clearBtn = document.querySelector("#clear");
// const items = document.querySelectorAll(".items");

// // Define the function to handle the click event
// const handleClearButtonClick = () => {
//   // Loop through each item and remove it
//   items.forEach((item) => {
//     item.remove();
//   });

//   console.log(items);
// };

// // Add the event listener
// clearBtn.addEventListener("click", handleClearButtonClick);

// // Remove the event listener after 5000 milliseconds (5 seconds)
// setTimeout(() => {
//   clearBtn.removeEventListener("click", handleClearButtonClick);
// }, 10000);

// const logo = document.querySelector("img");

// const onClick = () => {
//   const backgroundChange = document.body.style.backgroundColor;
//   const container = document.querySelector(".container"); // Fix typo in the class name

//   if (backgroundChange === "white") {
//     document.body.style.backgroundColor = "skyblue"; // Change background color directly on body
//     container.style.backgroundColor = "purple";
//   } else {
//     document.body.style.backgroundColor = "green"; // Change background color directly on body
//     container.style.backgroundColor = "green";
//   }
// };

// // Example: Add the click event listener to a button
// // const button = document.querySelector("#myButton"); // Replace with your button ID
// // button.addEventListener("click", onClick);

// const onDoubleClick = () => {
//   document.body.style.backgroundColor = "greenyellow";
// };

// logo.addEventListener("dblclick", onDoubleClick);
// logo.addEventListener("click", onClick);

// const logo = document.querySelector("img");

// const onMouseDown = () => {
//   console.log("greatest greatest");
// };

// document.addEventListener("mousedown", onMouseDown);

// function onClick(e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// }

// logo.addEventListener("click", onClick);

// function onDrag(e) {
//   document.querySelector("h1").textContent = `X ${e.clientX} Y${e.clientY}`;
// }

// logo.addEventListener("drag", onDrag);

// const itemInput = document.getElementById("item-input");

// const onKeyPress = (e) => {
//   console.log("greatest");
// };

// itemInput.addEventListener("keypress", onKeyPress);

// DECLARE YOUR VARIABLES IN THE GLOBAL SCOPE
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === " ") {
    alert("input an item");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const button = createBtn("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.append(li);
  itemInput.value = " ";
}

function createBtn(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

//  event listeners
itemForm.addEventListener("submit", addItem);
