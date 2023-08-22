//Reference of Impure Function

const names = new Set();
const findId = (action) => {
    const targetId = document.getElementById(action.event.id).id;
    const uniqueName = document.getElementById("naming").value;
    if (!names.has(uniqueName)) {
        if (action.type === "Folder") {
            currLevel = findTargetId(
                targetId,
                uniqueName,
                FileStore.getState(),
                action,
                names
            );
            names.add(uniqueName);
            console.log(FileStore.getState()["children"]);
            return currLevel;
        } else if (action.type === "File") {
            currLevel = findTargetId(
                targetId,
                uniqueName,
                FileStore.getState(),
                action,
                names
            );
            names.add(uniqueName);
            console.log(FileStore.getState()["children"]);
            return currLevel;
        } else if (action.type === "delete") {
            const deleted = deleteNode(targetId, FileStore.getState());
            return deleted;
        } else if (action.type === "EditFolder") {
            let newName = prompt("Enter new name: ", "");
            let { prevName } = findTargetId(
                targetId,
                newName,
                FileStore.getState(),
                action,
                names
            );
            return { newName, prevName };
        } else if (action.type === "EditFile") {
            let newName = prompt("Enter new name: ", "");
            let { prevName } = findTargetId(
                targetId,
                newName,
                FileStore.getState(),
                action,
                names
            );
            return { newName, prevName };
        }
    } else {
        alert("Name already Exists");
        return false;
    }
};

const updateSet = (nameOfItem) => {
    if (names.has(nameOfItem)) {
        names.delete(nameOfItem);
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
        return true;
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

const findTargetId = (targetId, uniqueName, folderStructure, action, names) => {
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
        } else if (action.type === "EditFolder") {
            let prevName = folderStructure["name"];
            folderStructure["name"] = uniqueName;
            folderStructure["id"] = uniqueName.replace(/ /g, "_") + "FolderDiv";
            return { prevName };
        } else if (action.type === "EditFile") {
            let prevName = folderStructure["name"];
            folderStructure["name"] = uniqueName;
            folderStructure["id"] = uniqueName.replace(/ /g, "_") + "FileDiv";
            return { newName: folderStructure["name"], prevName };
        }
    } else {
        let listOfChildren = folderStructure["children"];
        for (let obj of listOfChildren) {
            let newLevel = findTargetId(
                targetId,
                uniqueName,
                obj,
                action,
                names
            );
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
