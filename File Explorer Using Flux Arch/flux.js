const Dispatcher = {
    callbacks: [],

    register(callback) {
        this.callbacks.push(callback);
    },

    dispatch(action) {
        this.callbacks.forEach((callback) => callback(action));
    },
};

const FileStore = {
    state: {
        level: 0,
        id: "rootDiv",
        name: "Root",
        children: [],
        type: "folder",
    },

    getState() {
        return this.state;
    },

    handleAction(action) {
        if (action.type === "Folder") {
            let res = createFolderItem(action);
        } else if (action.type === "File") {
            let res = createFileItem(action);
        } else if (action.type === "delete") {
            deleteFolderOrFile(action);
        } else if (action.type === "toggle") {
            toggleBtn(action);
        } else {
            editItem(action);
        }
    },

    emitChange() {
        console.log("Store changed:", this.state);
    },
};

// View
// const FileExplorerView = {
//     init() {
//         this.counterElement = document.getElementById("counter");
//         this.render();
//     },

//     render() {
//         const { count } = FileStore.getState();
//         this.counterElement.textContent = `Count: ${count}`;
//     },
// };

function getFolderType(userInput, event) {
    return {
        type: "Folder",
        userInput,
        event,
    };
}

function getFileType(userInput, event) {
    return {
        type: "File",
        userInput,
        event,
    };
}

function getDeleteType(event) {
    return {
        type: "delete",
        event,
    };
}

function getEditType(event) {
    if (event.id.includes("Folder")) {
        return {
            type: "FolderEdit",
            event,
        };
    } else {
        return {
            type: "FileEdit",
            event,
        };
    }
}

function getToggleType(event) {
    return {
        type: "toggle",
        event,
    };
}

// Connect Store to Dispatcher
// bridge between dispatcher, action and store
Dispatcher.register(FileStore.handleAction.bind(FileStore));

// Initialize View
// FileExplorerView.init();

// Event Listeners
function onClickFolder(event) {
    const userInput = document.getElementById("naming");
    Dispatcher.dispatch(getFolderType(userInput, event));
    userInput.value = "";
    userInput.focus();
}

function onClickFile(event) {
    const userInput = document.getElementById("naming");
    Dispatcher.dispatch(getFileType(userInput, event));
    userInput.value = "";
    userInput.focus();
}

function onClickDelete(event) {
    Dispatcher.dispatch(getDeleteType(event));
}

function onClickEdit(event) {
    Dispatcher.dispatch(getEditType(event));
}

function onClickToggle(event) {
    Dispatcher.dispatch(getToggleType(event));
}
