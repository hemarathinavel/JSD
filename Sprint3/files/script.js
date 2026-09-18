// script.js
// Wires up the DOM: renders tasks from the TaskManager (restoring any
// saved in Local Storage), and handles adding, deleting, and updating
// tasks through the form and task cards.
// Depends on classes.js (Task, TaskManager) being loaded first.

const manager = new TaskManager();

const taskList = document.getElementById("taskList");
const taskCardTemplate = document.getElementById("taskCardTemplate");
const taskForm = document.getElementById("taskForm");
const submitBtn = document.getElementById("submitBtn");

// If we're currently editing a task, this holds its id. null = "adding new".
let editingTaskId = null;

// ---- Sample tasks (only used the very first time, when Local Storage is empty) ----
const sampleTaskData = [
  {
    name: "Set up project repository",
    description: "Initialize the git repo, add a README, and invite the team.",
    assignedTo: "Hema",
    dueDate: "2026-09-22",
    status: "DONE",
  },
  {
    name: "Design database schema",
    description: "Define tables and relationships for the task management app.",
    assignedTo: "Arun",
    dueDate: "2026-09-24",
    status: "DONE",
  },
  {
    name: "Build task form with Bootstrap",
    description: "Create the form with Name, Description, AssignedTo, DueDate, and Status fields.",
    assignedTo: "Hema",
    dueDate: "2026-09-26",
    status: "IN PROGRESS",
  },
  {
    name: "Add update and delete features",
    description: "Let a user click a task to edit it, and delete tasks they no longer need.",
    assignedTo: "Priya",
    dueDate: "2026-09-27",
    status: "IN PROGRESS",
  },
  {
    name: "Persist tasks with Local Storage",
    description: "Tasks should still be there after closing and reopening the browser.",
    assignedTo: "Karthik",
    dueDate: "2026-09-29",
    status: "REVIEW",
  },
];

// Maps a status value to the CSS modifier class used for its badge color.
function statusClass(status) {
  switch (status) {
    case "TODO":
      return "task-card__status--todo";
    case "IN PROGRESS":
      return "task-card__status--in-progress";
    case "REVIEW":
      return "task-card__status--review";
    case "DONE":
      return "task-card__status--done";
    default:
      return "task-card__status--todo";
  }
}

// Formats an ISO date (yyyy-mm-dd) as something more readable, e.g. Sep 22, 2026.
function formatDate(isoDate) {
  const date = new Date(isoDate + "T00:00:00");
  if (isNaN(date)) return isoDate;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Builds one <li> task card from the template and a Task object,
// wires up its delete + click-to-edit behaviour, and adds it to the list.
function renderTaskCard(task) {
  const clone = taskCardTemplate.content.cloneNode(true);

  const listItem = clone.querySelector(".task-list__item");
  listItem.dataset.taskId = task.id;

  clone.querySelector(".task-card__name").textContent = task.name;
  clone.querySelector(".task-card__description").textContent = task.description;
  clone.querySelector(".task-card__assigned").textContent = task.assignedTo;
  clone.querySelector(".task-card__due").textContent = formatDate(task.dueDate);

  const statusEl = clone.querySelector(".task-card__status");
  statusEl.textContent = task.status;
  statusEl.classList.add(statusClass(task.status));

  const cardEl = clone.querySelector(".task-card");
  cardEl.addEventListener("click", () => handleEditClick(task.id));

  const deleteBtn = clone.querySelector(".task-card__delete");
  deleteBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // don't also trigger the edit click above
    handleDelete(task.id);
  });

  if (taskList.firstChild) {
    taskList.insertBefore(clone, taskList.firstChild);
  } else {
    taskList.appendChild(clone);
  }
}

// Removes every rendered card and redraws the list from the manager's
// current tasks array (used after an update, so ordering/content stays in sync).
function renderAllTasks() {
  taskList.innerHTML = "";
  manager.getAllTasks().forEach((task) => renderTaskCard(task));
}

// Loads tasks on startup: if Local Storage already had tasks, show those.
// Otherwise seed the board with the sample tasks (which also saves them).
function initTasks() {
  if (manager.getAllTasks().length > 0) {
    renderAllTasks();
  } else {
    sampleTaskData.forEach((data) => manager.addTask(data));
    renderAllTasks();
  }
}

// ---- Delete ----
function handleDelete(id) {
  const removed = manager.deleteTask(id);
  if (!removed) return;

  // If the task being deleted was mid-edit, cancel the edit.
  if (editingTaskId === id) {
    exitEditMode();
  }

  const cardEl = taskList.querySelector(`[data-task-id="${id}"]`);
  if (cardEl) {
    cardEl.remove();
  }
}

// ---- Edit / Update ----

// Clicking a task card loads its data into the form and switches
// the form into "editing" mode (button becomes "Update").
function handleEditClick(id) {
  const task = manager.getTaskById(id);
  if (!task) return;

  editingTaskId = id;

  document.getElementById("name").value = task.name;
  document.getElementById("description").value = task.description;
  document.getElementById("assignedTo").value = task.assignedTo;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("status").value = task.status;

  submitBtn.textContent = "Update";
  taskForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Resets the form back to "adding a new task" mode.
function exitEditMode() {
  editingTaskId = null;
  submitBtn.textContent = "Add task";
  taskForm.reset();
  taskForm.classList.remove("was-validated");
}

// ---- Form validation + submit (handles both add and update) ----
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!taskForm.checkValidity()) {
    taskForm.classList.add("was-validated");
    return;
  }

  const formData = {
    name: document.getElementById("name").value.trim(),
    description: document.getElementById("description").value.trim(),
    assignedTo: document.getElementById("assignedTo").value.trim(),
    dueDate: document.getElementById("dueDate").value,
    status: document.getElementById("status").value,
  };

  if (editingTaskId !== null) {
    // Updating an existing task
    manager.updateTask(editingTaskId, formData);
    renderAllTasks(); // redraw so the updated card reflects the new data
    exitEditMode();
  } else {
    // Adding a brand new task
    const newTask = manager.addTask(formData);
    renderTaskCard(newTask);
    taskForm.reset();
    taskForm.classList.remove("was-validated");
  }
});

initTasks();
