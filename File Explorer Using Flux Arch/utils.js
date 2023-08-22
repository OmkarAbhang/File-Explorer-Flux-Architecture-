// Reference of Pure Function

const createFolderItem = (action) => {
    let folderName = document.getElementById("naming");
    if (!folderName.value) {
        alert("Enter Valid Name");
        return;
    }

    let newLevel = findId(action);

    // Create a new div element for the folder item
    let childrenContainer = createChildrenContainer(folderName, "Folder");
    let newFolderDiv = createNewDiv(folderName, "Folder");

    // Create the child elements for the new folder item
    let arrowSpan = createArrow(folderName);
    let nameSpan = nameContainer(folderName);
    let folderSpan = createFolder(folderName);
    let fileSpan = createFile(folderName);
    let deleteSpan = createDeleteBtn(folderName);
    // Append the child elements to the new folder div
    newFolderDiv.appendChild(arrowSpan);
    newFolderDiv.appendChild(nameSpan);
    // newFolderDiv.appendChild(editSpan);
    newFolderDiv.appendChild(folderSpan);
    newFolderDiv.appendChild(fileSpan);
    newFolderDiv.appendChild(deleteSpan);
    newFolderDiv.appendChild(childrenContainer);

    newLevel = newLevel * 10;
    newFolderDiv.style.paddingLeft = newLevel + "px";

    // Append the new folder div to the file explorer
    // let fileExplorer = document.getElementById("fileExplorer");
    let temp = document.getElementById(action.event.id).parentNode.parentNode
        .id;
    let targetDiv = temp + "Children";
    let childDiv = document.getElementById(targetDiv);
    childDiv.appendChild(newFolderDiv);
    folderName.style.displayText = "none";
};

const createFileItem = (action) => {
    let fileName = document.getElementById("naming");
    if (!fileName.value) {
        alert("Enter Valid Name");
        return;
    }

    let newLevel = findId(action);

    // Create a new div element for the folder item
    let newFileDiv = createNewDiv(fileName, "File");
    let childrenContainer = createChildrenContainer(fileName, "File");

    // Create the child elements for the new folder item
    let arrowSpan = createArrow(fileName);
    let nameSpan = nameContainer(fileName);
    let fileSpan = createFile(fileName);
    let deleteSpan = createDeleteBtn(fileName);
    // let editSpan = createEditFile(fileName);

    // Append the child elements to the new folder div
    newFileDiv.appendChild(arrowSpan);
    newFileDiv.appendChild(nameSpan);
    newFileDiv.appendChild(editSpan);
    newFileDiv.appendChild(fileSpan);
    newFileDiv.appendChild(deleteSpan);
    newFileDiv.appendChild(childrenContainer);

    newLevel = newLevel * 10;
    newFileDiv.style.paddingLeft = newLevel + "px";

    let temp = document.getElementById(action.event.id).parentNode.parentNode
        .id;
    let targetDiv = temp + "Children";
    let childDiv = document.getElementById(targetDiv);
    childDiv.appendChild(newFileDiv);
    fileName.innerHTML = null;
    // Append the new folder div to the file explorer
    // let fileExplorer = document.getElementById("fileExplorer");
    // fileExplorer.appendChild(newFileDiv);
};

const deleteFolderOrFile = (action) => {
    // Deleted
    let deleted = findId(action);
    let grandParentId = document.getElementById(action.event.id).parentElement
        .parentElement.parentNode.id;
    let grandParent = document.getElementById(grandParentId);
    grandParent.removeChild(grandParent.firstChild);
    return deleted;
};

// const editItem = (action) => {
//     let { newName, prevName } = findId(action);
//     editIds(action, newName, prevName);
// };

// const editIds = (action, newName, prevName) => {
//     console.log(action);
//     console.log(newName);
//     console.log(prevName);
//     if (action.type === "FolderEdit") {
//         let cleanNamePrev = prevName.replace(/ /g, "_");
//         let cleanNameNew = newName.replace(/ /g, "_");

//         let idToEdit = cleanNamePrev + "FolderBtn";
//         let folderBtn = document.getElementById(idToEdit);
//         folderBtn.id = cleanNameNew + "FolderBtn";
//         idToEdit = cleanNamePrev + "FolderSpan";
//         let folderSpan = document.getElementById(idToEdit);
//         folderSpan.id = cleanNameNew + "FolderSpan";

//         idToEdit = cleanNamePrev + "FileBtn";
//         let fileBtn = document.getElementById(idToEdit);
//         fileBtn.id = cleanNameNew + "FileBtn";
//         idToEdit = cleanNamePrev + "FileSpan";
//         let fileSpan = document.getElementById(idToEdit);
//         fileSpan.id = cleanNameNew + "FileSpan";

//         idToEdit = cleanNamePrev + "DeleteBtn";
//         let deleteBtn = document.getElementById(idToEdit);
//         deleteBtn.id = cleanNameNew + "DeleteBtn";
//         idToEdit = cleanNamePrev + "DeleteSpan";
//         let deleteSpan = document.getElementById(idToEdit);
//         deleteSpan.id = cleanNameNew + "DeleteSpan";

//         idToEdit = cleanNamePrev + "NameSpan";
//         let nameSpan = document.getElementById(idToEdit);
//         let parent = document.getElementById(idToEdit).parentNode;
//         console.log("parent", parent);
//         nameSpan.id = cleanNameNew + "NameSpan";
//         nameSpan.innerText = newName;
//     } else {
//         let cleanNamePrev = prevName.replace(/ /g, "_");
//         let cleanNameNew = prevName.replace(/ /g, "_");

//         idToEdit = cleanNamePrev + "FileBtn";
//         let fileBtn = document.getElementById(idToEdit);
//         fileBtn.id = cleanNameNew + "FileBtn";
//         idToEdit = cleanNamePrev + "FileSpan";
//         let fileSpan = document.getElementById(idToEdit);
//         fileSpan.id = cleanNameNew + "FileSpan";

//         idToEdit = cleanNamePrev + "deleteBtn";
//         let deleteBtn = document.getElementById(idToEdit);
//         deleteBtn.id = cleanNameNew + "DeleteBtn";
//         idToEdit = cleanNamePrev + "DeleteSpan";
//         let deleteSpan = document.getElementById(idToEdit);
//         deleteSpan.id = cleanNameNew + "DeleteSpan";

//         idToEdit = cleanNamePrev + "NameSpan";
//         let parent = document.getElementById(idToEdit).parentNode;
//         console.log("parent", parent);
//         // parent.id = cleanNameNew  + ""
//         let nameSpan = document.getElementById(idToEdit);
//         nameSpan.id = cleanNameNew + "NameSpan";
//         nameSpan.innerText = newName;
//     }
// };

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
    // folderBtn.addEventListener("click", findId);
    editBtn.src = "images/icons8-edit-16.png";
    editBtn.className = "editBtn";
    editBtn.id = userInput.value.replace(/ /g, "_") + "EditFolderBtn";
    editBtn.setAttribute("onclick", "onClickEdit(this)");
    editSpan.appendChild(editBtn);
    editSpan.id = userInput.value.replace(/ /g, "_") + "EditSpan";
    return editSpan;
};

const createEditFile = (userInput) => {
    let editSpan = document.createElement("span");
    let editBtn = document.createElement("img");
    // folderBtn.addEventListener("click", findId);
    editBtn.src = "images/icons8-edit-16.png";
    editBtn.className = "editBtn";
    editBtn.id = userInput.value.replace(/ /g, "_") + "EditFileBtn";
    editBtn.setAttribute("onclick", "onClickEdit(this)");
    editSpan.appendChild(editBtn);
    editSpan.id = userInput.value.replace(/ /g, "_") + "EditSpan";
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
    folderSpan.id = folderName.value.replace(/ /g, "_") + "FolderSpan";
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
    fileSpan.id = fileName.value.replace(/ /g, "_") + "FileSpan";
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
    deleteSpan.id = userInput.value.replace(/ /g, "_") + "DeleteSpan";
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
    nameSpan.id = folderName.value.replace(/ /g, "_") + "NameSpan";
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

// const createFileItem = (event) => {
//     let fileName = document.getElementById("naming");

//     // Create a new div element for the folder item
//     let newFileDiv = document.createElement("div");
//     newFileDiv.className = "item"; // Set the CSS class
//     newFileDiv.id = fileName.value.replace(/ /g, "_") + "FileDiv";

//     // Create the child elements for the new folder item
//     let arrowSpan = createArrow();
//     arrowSpan.id = fileName + "ArrowSpan";

//     let nameSpan = nameContainer(fileName);
//     nameSpan.id = fileName.value.replace(/ /g, "_") + "NameSpan";

//     let fileSpan = createFile(fileName);
//     fileSpan.id = fileName.value.replace(/ /g, "_") + "FileSpan";

//     let deleteSpan = createDeleteBtn(fileName);
//     deleteSpan.id = fileName.value.replace(/ /g, "_") + "DeleteSpan";

//     // Append the child elements to the new folder div
//     newFileDiv.appendChild(arrowSpan);
//     newFileDiv.appendChild(nameSpan);
//     newFileDiv.appendChild(fileSpan);
//     newFileDiv.appendChild(deleteSpan);

//     // Append the new folder div to the file explorer
//     let fileExplorer = document.getElementById("fileExplorer");
//     fileExplorer.appendChild(newFileDiv);
// };
