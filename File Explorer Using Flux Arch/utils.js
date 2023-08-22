// Reference of Pure Function
const createFolderItem = (action) => {
    let folderName = document.getElementById("naming");
    if (!folderName.value) {
        alert("Enter Valid Name");
        return;
    }

    let newLevel = findId(action);
    if (newLevel == false) {
        return;
    }
    // Create a new div element for the folder item
    let childrenContainer = createChildrenContainer(folderName, "Folder");
    let newFolderDiv = createNewDiv(folderName, "Folder");

    // Create the child elements for the new folder item
    let arrowSpan = createArrow(folderName);
    let nameSpan = nameContainer(folderName);
    let editSpan = createEditFolder(folderName);
    let folderSpan = createFolder(folderName);
    let fileSpan = createFile(folderName);
    let deleteSpan = createDeleteBtn(folderName);

    // Append the child elements to the new folder div
    newFolderDiv.appendChild(arrowSpan);
    newFolderDiv.appendChild(nameSpan);
    newFolderDiv.appendChild(editSpan);
    newFolderDiv.appendChild(folderSpan);
    newFolderDiv.appendChild(fileSpan);
    newFolderDiv.appendChild(deleteSpan);
    newFolderDiv.appendChild(childrenContainer);

    newLevel = newLevel * 10;
    newFolderDiv.style.paddingLeft = newLevel + "px";

    // Append the new folder div to the file explorer
    // let fileExplorer = document.getElementById("fileExplorer");
    let targetDiv = document.getElementById(action.event.id).parentNode
        .parentNode;
    targetDiv.appendChild(newFolderDiv);
    folderName.style.displayText = "none";
};

const createFileItem = (action) => {
    let fileName = document.getElementById("naming");
    if (!fileName.value) {
        alert("Enter Valid Name");
        return;
    }

    let newLevel = findId(action);
    if (newLevel == false) {
        return;
    }
    // Create a new div element for the folder item
    let newFileDiv = createNewDiv(fileName, "File");
    let childrenContainer = createChildrenContainer(fileName, "File");

    // Create the child elements for the new folder item
    let arrowSpan = createArrow(fileName);
    let nameSpan = nameContainer(fileName);
    let fileSpan = createFile(fileName);
    let deleteSpan = createDeleteBtn(fileName);
    let editSpan = createEditFile(fileName);

    // Append the child elements to the new folder div
    newFileDiv.appendChild(arrowSpan);
    newFileDiv.appendChild(nameSpan);
    newFileDiv.appendChild(editSpan);
    newFileDiv.appendChild(fileSpan);
    newFileDiv.appendChild(deleteSpan);
    newFileDiv.appendChild(childrenContainer);

    newLevel = newLevel * 10;
    newFileDiv.style.paddingLeft = newLevel + "px";

    let targetDiv = document.getElementById(action.event.id).parentNode
        .parentNode;
    targetDiv.appendChild(newFileDiv);
    fileName.style.displayText = "none";

    // // roating arrow
    // let btn = document.getElementById(action.event.id);
    // let btnSpan = btn.parentNode;
    // let parent = btnSpan.parentNode;
    // let arrow = parent.children[0];
};

const deleteFolderOrFile = (action) => {
    // Deleted
    let parentId = document.getElementById(action.event.id).parentNode
        .parentNode;
    let nameOfItem = parentId.children[1].innerHTML;
    updateSet(nameOfItem);
    let deleted = findId(action);
    let grandParentId = document.getElementById(action.event.id).parentNode
        .parentNode.parentNode.id;
    let grandParent = document.getElementById(grandParentId);
    grandParent.removeChild(document.getElementById(parentId.id));
    return deleted;
};

const editFolder = (action) => {
    let { newName, prevName } = findId(action);

    editFolderDiv(newName, prevName, "FolderDiv");
    editArrow(newName, prevName, "ArrowSpan");
    editArrowImg(newName, prevName, "ChildrenImg");
    editNameSpan(newName, prevName);
    editBtnImg(newName, prevName, "Edit");
    editBtnImg(newName, prevName, "EditFolderBtn");
    editFolderSpan(newName, prevName, "Folder");
    editFolderImg(newName, prevName, "FolderBtn");
    editDeleteSpan(newName, prevName, "Delete");
    editDeleteImg(newName, prevName, "DeleteBtn");
    editChildDiv(newName, prevName, "FolderDivChildren");
};

const editFile = (action) => {
    let { newName, prevName } = findId(action);

    editFileDiv(newName, prevName, "FileDiv");

    editArrow(newName, prevName, "ArrowSpan");
    editArrowImg(newName, prevName, "ChildrenImg");

    editNameSpan(newName, prevName);

    editBtnSpan(newName, prevName, "Edit");
    editBtnImg(newName, prevName, "EditFileBtn");

    editFileSpan(newName, prevName, "File");
    editFileImg(newName, prevName, "FileBtn");

    editDeleteSpan(newName, prevName, "Delete");
    editDeleteImg(newName, prevName, "DeleteBtn");

    editChildDiv(newName, prevName, "FileDivChildren");
};

const editFolderDiv = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};

const editFileDiv = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};

const editArrow = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editArrowImg = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editNameSpan = (newName, prevName) => {
    let id = prevName.replace(/ /g, "_");
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_");
    ele.innerText = newName;
};
const editBtnSpan = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editBtnImg = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editFolderSpan = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editFolderImg = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editFileSpan = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editFileImg = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editDeleteSpan = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editDeleteImg = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};
const editChildDiv = (newName, prevName, suffix) => {
    let id = prevName.replace(/ /g, "_") + suffix;
    let ele = document.getElementById(id);
    ele.id = newName.replace(/ /g, "_") + suffix;
};

const createNewDiv = (folderName, type) => {
    if (type === "Folder") {
        let newFolderDiv = document.createElement("div");
        newFolderDiv.className = "item";
        newFolderDiv.id = folderName.value.replace(/ /g, "_") + "FolderDiv";
        return newFolderDiv;
    } else {
        let newFileDiv = document.createElement("div");
        newFileDiv.className = "item";
        newFileDiv.id = folderName.value.replace(/ /g, "_") + "FileDiv";
        return newFileDiv;
    }
};

const toggleBtn = (action) => {
    let arrowImg = document.getElementById(action.event.id);
    let arrowSpan = arrowImg.parentNode;
    let parent = arrowSpan.parentNode;
    let children = parent.children[5];
    let arrow = parent.children[0];
    if (children.style.display === "none") {
        children.style.display = "block";
    } else {
        children.style.display = "none";
    }
};

const createChildrenContainer = (name, type) => {
    let containerDiv = document.createElement("div");
    if (type === "Folder") {
        containerDiv.id = name.value.replace(/ /g, "_") + "FolderDivChildren";
    } else {
        containerDiv.id = name.value.replace(/ /g, "_") + "FileDivChildren";
    }
    return containerDiv;
};

const createEditFolder = (userInput) => {
    let editSpan = document.createElement("span");
    let editBtn = document.createElement("img");
    editBtn.src = "images/icons8-edit-16.png";
    editBtn.className = "editBtn";
    editBtn.id = userInput.value.replace(/ /g, "_") + "EditFolderBtn";
    editBtn.setAttribute("onclick", "onClickEdit(this)");
    editSpan.appendChild(editBtn);
    editSpan.id = userInput.value.replace(/ /g, "_") + "Edit";
    return editSpan;
};

const createEditFile = (userInput) => {
    let editSpan = document.createElement("span");
    let editBtn = document.createElement("img");
    editBtn.src = "images/icons8-edit-16.png";
    editBtn.className = "editBtn";
    editBtn.id = userInput.value.replace(/ /g, "_") + "EditFileBtn";
    editBtn.setAttribute("onclick", "onClickEdit(this)");
    editSpan.appendChild(editBtn);
    editSpan.id = userInput.value.replace(/ /g, "_") + "Edit";
    return editSpan;
};

const createFolder = (folderName) => {
    let folderSpan = document.createElement("span");
    folderSpan.className = "folder";
    let folderBtn = document.createElement("img");
    // folderBtn.addEventListener("click", findId);
    folderBtn.src = "images/icons8-folder-480.png";
    folderBtn.className = "folderBtn";
    folderBtn.id = folderName.value.replace(/ /g, "_") + "FolderBtn";
    folderBtn.setAttribute("onclick", "onClickFolder(this)");
    folderSpan.appendChild(folderBtn);
    folderSpan.id = folderName.value.replace(/ /g, "_") + "Folder";
    return folderSpan;
};

const createFile = (fileName) => {
    let fileSpan = document.createElement("span");
    fileSpan.className = "file";
    let fileBtn = document.createElement("img");
    fileBtn.src = "images/newFile.png";
    fileBtn.className = "fileBtn";
    fileBtn.id = fileName.value.replace(/ /g, "_") + "FileBtn";
    fileBtn.setAttribute("onclick", "onClickFile(this)");
    fileSpan.appendChild(fileBtn);
    fileSpan.id = fileName.value.replace(/ /g, "_") + "File";
    return fileSpan;
};

const createDeleteBtn = (userInput) => {
    let deleteSpan = document.createElement("span");
    deleteSpan.className = "delete";
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "images/icons8-delete-24.png";
    deleteBtn.className = "deleteBtn";
    deleteBtn.id = userInput.value.replace(/ /g, "_") + "DeleteBtn";
    deleteBtn.setAttribute("onclick", "onClickDelete(this)");
    deleteBtn.textContent = "🗑";
    deleteSpan.appendChild(deleteBtn);
    deleteSpan.id = userInput.value.replace(/ /g, "_") + "Delete";
    return deleteSpan;
};

const createArrow = (folderName) => {
    let arrowSpan = document.createElement("span");
    arrowSpan.className = "arrow";
    let arrowImg = document.createElement("img");
    arrowImg.src = "images/icons8-right-button-48.png";
    arrowImg.alt = "➡";
    arrowImg.id = folderName.value.replace(/ /g, "_") + "ChildrenImg";
    arrowImg.setAttribute("onclick", "onClickToggle(this)");
    arrowSpan.id = folderName.value.replace(/ /g, "_") + "ArrowSpan";
    arrowSpan.appendChild(arrowImg);
    return arrowSpan;
};

const nameContainer = (folderName) => {
    let nameSpan = document.createElement("span");
    nameSpan.className = "name";
    const userInput = document.getElementById("naming");
    nameSpan.textContent = `${userInput.value}`;
    nameSpan.style.fontSize = "30px";
    nameSpan.id = folderName.value.replace(/ /g, "_");
    return nameSpan;
};

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    let toogleBtn = document.getElementById("darkModeButton");
    let displayText = toogleBtn.innerHTML;
    if (displayText === "Dark Mode") {
        // In Dark Mode
        toogleBtn.innerHTML = "Light Mode";
    } else {
        // In Light Mode
        toogleBtn.innerHTML = "Dark Mode";
    }
};
