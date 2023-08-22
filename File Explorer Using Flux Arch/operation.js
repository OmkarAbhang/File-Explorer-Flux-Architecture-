//Reference of Impure Function
const findId = (action) => {
    const targetId = document.getElementById(action.event.id).id;
    const uniqueName = document.getElementById("naming").value;
    if (action.type === "Folder") {
        currLevel = findTargetId(
            targetId,
            uniqueName,
            FileStore.getState(),
            action
        );
        console.log(FileStore.getState()["children"]);
        return currLevel;
    } else if (action.type === "File") {
        currLevel = findTargetId(
            targetId,
            uniqueName,
            FileStore.getState(),
            action
        );
        console.log(FileStore.getState()["children"]);
        return currLevel;
    } else if (action.type === "delete") {
        const deleted = deleteNode(targetId, FileStore.getState());
        return deleted;
    } else {
        if (targetId.includes("Folder")) {
            let idToEdit = targetId.replace("Edit", "");
            idToEdit = idToEdit.replace("Btn", "Div");
        } else {
            let idToEdit = targetId.replace("EditFolder", "File");
            idToEdit = idToEdit.replace("Btn", "Div");
        }
        let newName = prompt("Enter new name: ", "");
        let res = findTargetId(targetId, newName, FileStore.getState(), action);
        return res;
    }
};

const deleteNode = (targetId, folderStructure) => {
    const deleted = findNodeForDeletion(targetId, folderStructure);
    console.log(folderStructure);
    return deleted;
};

const findNodeForDeletion = (targetId, folderStructure) => {
    let divId = document.getElementById(targetId).parentNode.parentNode.id;
    if (folderStructure["id"] === divId) {
        folderStructure["children"] = [];
        let deleted = true;
        return deleted;
    } else {
        let listOfChildren = folderStructure["children"];
        for (let obj of listOfChildren) {
            let deleted = findNodeForDeletion(targetId, obj);
            if (deleted) {
                return deleted;
            }
        }
    }
};

const getFileStructure = (uniqueName, newLevel) => {
    return {
        level: newLevel,
        id: `${uniqueName}FileDiv`,
        name: `${uniqueName}`,
        children: [],
        type: "file",
    };
};

const getFolderStructure = (uniqueName, newLevel) => {
    return {
        level: newLevel,
        id: `${uniqueName}FolderDiv`,
        name: `${uniqueName}`,
        children: [],
        type: "folder",
    };
};

const findTargetId = (targetId, uniqueName, folderStructure, action) => {
    let id = document.getElementById(targetId).parentNode.parentNode.id;
    if (folderStructure["id"] === id) {
        let newLevel = folderStructure["level"] + 1;
        let children = folderStructure["children"];
        let newObject;
        if (action.type === "Folder") {
            newObject = getFolderStructure(uniqueName, newLevel);
            children.push(newObject);
            return newLevel;
        } else if (action.type === "File") {
            newObject = getFileStructure(uniqueName, newLevel);
            children.push(newObject);
            return newLevel;
        } else if (action.type === "FolderEdit") {
            // Edit folder
            console.log("Before", folderStructure);
            let prevName = folderStructure["name"];
            folderStructure["name"] = uniqueName;
            folderStructure["id"] = uniqueName.replace(/ /g, "_") + "FolderDiv";
            console.log("after", folderStructure);
            return { newName: folderStructure["name"], prevName };
        } else if (action.type === "FileEdit") {
            // Edit folder
        }
    } else {
        let listOfChildren = folderStructure["children"];
        for (let obj of listOfChildren) {
            let newLevel = findTargetId(targetId, uniqueName, obj, action);
            if (newLevel) {
                return newLevel;
            }
        }
    }
};

// const findFolderId = (folderId, uniqueName, folderStructure) => {
//     let id = document.getElementById(folderId).parentNode.parentNode.id;
//     if (folderStructure["id"] === id) {
//         let newLevel = folderStructure["level"] + 1;
//         let children = folderStructure["children"];
//         console.log(typeof children);
//         let newObject = getFolderStructure(newLevel);
//         children.push(newObject);
//         console.log(folderStructure);
//         return newLevel;
//     } else {
//         let listOfChildren = folderStructure["children"];
//         for (let obj of listOfChildren) {
//             let newLevel = findFolderId(folderId, uniqueName, obj);
//             if (newLevel) {
//                 return newLevel;
//             }
//         }
//     }
//     console.log(folderStructure);
// };

// const findFileId = (fileId, uniqueName, folderStructure) => {
//     let id = document.getElementById(fileId).parentNode.parentNode.id;
//     if (folderStructure["id"] === id) {
//         let newLevel = folderStructure["level"] + 1;
//         let children = folderStructure["children"];
//         let newObject = getFileStructure(newLevel);
//         children.push(newObject);
//         return true;
//     }
//     let listOfChildren = folderStructure["children"];
//     for (let obj of listOfChildren) {
//         let found = findFileId(fileId, uniqueName, obj);
//         if (found) {
//             return true;
//         }
//     }
// };

// const createFolderNode = (folderId, uniqueName, folderStructure) => {
//     const currLevel = findFolderId(folderId, uniqueName, folderStructure);
//     return currLevel;
// };

// const createFileNode = (fileId, uniqueName, folderStructure) => {
//     console.log(`in createFileNode ${fileId}`);
//     const found = findFileId(fileId, uniqueName, folderStructure);
//     if (found) {
//         console.log(folderStructure);
//     } else {
//         alert("Something Went Wrong");
//     }
// };
