// DECLARE YOUR VARIABLES IN THE GLOBAL SCOPE
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFliter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");
let isEditMode = false;

function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemToDOM(item));
    checkUI();
}

function onAddItemSubmit(e) {
    e.preventDefault();
    const newItem = itemInput.value;
    if (newItem === "") {
        alert("input an item");
        return;
    }

    if (isEditMode) {
        const itemToEdit = itemList.querySelector(".edit-mode");
        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.remove();
        isEditMode = false;
    } else {
        if (checkIfItemExist(newItem)) {
            alert("that item already exists !");
        }
    }
    addItemToDOM(newItem);
    addItemToStorage(newItem);
    checkUI();
    itemInput.value = " ";
}

function addItemToDOM(item) {
    // create list item
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    const button = createBtn("remove-item btn-link text-red");
    li.appendChild(button);
    itemList.append(li);
}
// create new button
function createBtn(classes) {
    const button = document.createElement("button");
    button.className = classes;

    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    return button;
}
// create new icon
function createIcon(classes) {
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
}

function onClickItem(e) {
    if (e.target.parentElement.classList.contains("remove-item")) {
        removeItem(e.target.parentElement.parentElement);
    } else {
        setItemToEdit(e.target);
    }
}

function setItemToEdit(item) {
    isEditMode = true;
    itemList
        .querySelectorAll("li")
        .forEach((i) => i.classList.remove("edit-mode"));

    item.classList.add("edit-mode");
    formBtn.innerHTML = '<i class="fa=solid fa-pen" ></i>  update item';
    formBtn.style.backgroundColor = "green";
    itemInput.value = item.textContent;
}

// remove item from the item list
function removeItem(item) {
    if (confirm("Are you  sure?")) {
        item.remove();
        removeItemFromStorage(item.textContent);

        checkUI();
    }
}

// function removeItemFromStorage(item) {
//     const itemsFromStorage = getItemsFromStorage();
//     itemsFromStorage = itemsFromStorage.filter((i)  => i !== item);
// }

function addItemToStorage(items) {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.push(items);
    // convert to JSON string and set to local storage
    localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
    let itemsFromStorage;
    let storedItems = localStorage.getItem("items");

    if (storedItems === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem("items"));
    }
    return itemsFromStorage;
    // console.log(itemsFromStorage);
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage(); // Corrected typo
    // filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
    localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

// function to clear items
function clearItem() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    localStorage.removeItem("items");
    checkUI();
}
// function to fliter items
function fliterItem(e) {
    const items = itemList.querySelectorAll("li");
    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(text) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

function checkIfItemExist(item) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);
}
// function to clear both clear button and the fliter item button
function checkUI() {
    const items = itemList.querySelectorAll("li");
    if (items.length === 0) {
        clearBtn.style.display = "none";
        itemFliter.style.display = "none";
    } else {
        clearBtn.style.display = "block";
        itemFliter.style.display = "block";
    }

    isEditMode = false;
    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add  Item';
    formBtn.style.backgroundColor = "#333";
}

// initialize application
function init() {
    //  event listeners
    itemForm.addEventListener("submit", onAddItemSubmit);
    itemList.addEventListener("click", onClickItem);
    clearBtn.addEventListener("click", clearItem);
    itemFliter.addEventListener("input", fliterItem);
    document.addEventListener("DOMContentLoaded", displayItems);

    // to clear button whem there is no item
    checkUI();
}
init();
