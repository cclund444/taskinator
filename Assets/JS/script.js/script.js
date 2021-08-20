var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do"); 
var tasksInProgressEl = document.querySelector("#tasks-in-progree"); 
var tasksCompletedEl = document.querySelector("#tasks-completed");
var taskIdCounter = 0;
// var pageContentE1 = document.querySelector("#page-content");
var pageContentE1 = document.getElementById("page-content");
var tasks = [];
var taskFormHandler = function(event) {
    event.preventDefault();
var taskNameInput = document.querySelector("input[name='task-name']").value;
var taskTypeInput = document.querySelector("select[name='task-type']").value;
if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
}

formE1.reset();

var isEdit = formE1.hasAttribute("date-task-id");

if (isEdit) {
    var taskId = formE1.getAttribute("data-task-id");
    completeEditTask(taskNameInput, taskTypeInput, taskId);
} else {
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj); {
        console.log(taskDataObj);
        console.log(taskDatObj.status);
    }

}

var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
    status: "to do"
}

};

var createTaskEl = function(taskDataObj) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className= "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    tasksToDoE1.appendChild(listItemEl);
    taskDataObj.id = taskIdCounter;
    tasks.push(taskDataObj);
    taskIdCounter++;
};

var createTaskActions = function(taskId) {
var actionContainerE1 = document.createElement("div"); 
actionContainerE1.className = "task-actions";
var editButtonE1 = document.createElement("button");
editButtonE1.textContent = "Edit";
editButtonE1.className = "btn edit-btn";
editButtonE1.setAttribute("data-task-id", taskId);

actionContainerE1.appendChild(editButtonE1);

var deleteButtonE1 = document.createElement("button");
deleteButtonE1.textContent = "Delete";
deleteButtonE1.className = "btn delete-btn";
deleteButtonE1.setAttribute("data-task-id", taskId);

actionContainerE1.appendChild(deleteButtonE1);

var statusSelectE1 = document.createElement("select");
statusSelectE1.className = "select-status";
statusSelectE1.setAttribute("name", "status-change");
statusSelectE1.setAttribute("data-task-id", taskId);

actionContainerE1.appendChild(statusSelectE1);

var statusChoices = ["To Do", "In Progress", "Completed"];

for (var i = 0; i < statusChoices.length; i++) {
    var statusOptionE1 = document.createElement("option");
    statusOptionE1.textContent = statusChoices[i];
    statusOptionE1.setAttribute("value", statusChoices[i]);

    statusSelectE1.appendChild(statusOptionE1);
}
return actionContainerE1;
};

var completeEditTask = function(taskName, taskType, taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  taskSelected.querySelector("h3.task-name").textContent = taskName;
  taskSelected.querySelector("span.task-type").textContent = taskType;

for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === parseInt(taskId)) {
        tasks[i].name = taskName;
        tasks[i].type = taskType;
    }
};

    alert("Task Updated!");
    formE1.removeAttribute("data-task-id");
    document.querySelector("#save-task").textContent = "Add Task";
};

var taskButtonHandler = function(event) {
    var targetE1 = event.target;

    if (targetE1.matches(".edit-btn")) {
        console.log("edit", targetE1);
        var taskId = targetE1.getAttribute("data-task-id"); 
        editTask(taskId);
    }

    else if (targetE1.matches(".delete-btn")) {
        console.log("delete", targetE1);
        var taskId = targetE1.getAttribute("data-task-id");
        deleteTask(taskId);
    }
};

var editTask = function(taskId) {
    console.log(taskId);

 var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

 var taskName = taskSelected.querySelector("h3.task-name").textContent;
 console.log(taskName);

 var taskType = taskSelected.querySelector("span.task-type").textContent;
 console.log(taskType);

 document.querySelector("input[name='task-name']").value = taskName;
 document.querySelector("select[name='task-type']").value = taskType;

 formEl.setAttribute("data-task-id", taskId);
 formEl.querySelector("#save-task").textContent = "Save Task";
};

var deleteTask = function(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
    var updatedTaskArr = [];
    for (var i =0; i < tasks.length; i++){
        if (task[i].id !== parseInt(taskId)) {
            updatedTaskArr.push(tasks[i]);
        }
    }
    tasks = updatedTaskArr;
};

formE1.addEventListener("submit", taskFormHandler);

pageContentE1.addEventListener("click", taskButtonHandler);

var taskStatusChangeHandler = function(event) {
    var taskId = event.target.getAttribute("data-task-id");
    var statusValue = event.target.value.toLowerCase();
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    if (statusValue === "to do") {
        tasksToDoE1.appendChild(taskSelected);
    }
    else if (statusValue === "in progress") {
        taskaInProgressE1.appendChuild(taskSelected);
    }
    else if (statusValue === "completed") {
        taskCompletedE1.appendChild(taskSelected);
    }
    for (var i = 0; i < tasks.length; i++) {
        if (task[i].id === parseInt(taskId)) {
            tasks[i].status = statusValue;
        }
        console.log(tasks);
    }
};

var tasks = [
    {
        id: 1,
        name: "Add localStorage persistence",
        type: "Web",
        status: "in progress"
    },
    {
        id: 2,
        name: "Learn JavaScript",
        type: "Web",
        status: "in progress"
    },
    {
        id: 3,
        name: "Refactor code",
        type: "Web",
        status: "to do"
    }
];

