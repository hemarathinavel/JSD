// script.js
// Wires up the DOM: renders tasks from the TaskManager, handles the
// "Add task" form, and handles deleting a task via its delete button.
// Depends on classes.js (Task, TaskManager) being loaded first.

const manager = new TaskManager();

const taskList = document.getElementById("taskList");
const taskCardTemplate = document.getElementById("taskCardTemplate");
const taskForm = document.getElementById("taskForm");

// ---- Sample tasks, added through the manager so they get real ids ----
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
    name: "Build task card & list components",
    description: "Create a reusable task card and a list group to display multiple tasks.",
    assignedTo: "Priya",
    dueDate: "2026-09-27",
    status: "IN PROGRESS",
  },
  {
    name: "Add client-side form validation",
    description: "Validate all fields on submit and show meaningful error messages.",
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
// wires up its delete button, and adds it to the top of the list.
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

  const deleteBtn = clone.querySelector(".task-card__delete");
  deleteBtn.addEventListener("click", () => handleDelete(task.id));

  if (taskList.firstChild) {
    taskList.insertBefore(clone, taskList.firstChild);
  } else {
    taskList.appendChild(clone);
  }
}

function renderSampleTasks() {
  sampleTaskData.forEach((data) => {
    const task = manager.addTask(data);
    renderTaskCard(task);
  });
}

// Removes the task from the TaskManager's array, then removes its
// card from the DOM. The task id is what links the two.
function handleDelete(id) {
  const removed = manager.deleteTask(id);

  if (!removed) return;

  const cardEl = taskList.querySelector(`[data-task-id="${id}"]`);
  if (cardEl) {
    cardEl.remove();
  }
}

// ---- Form validation + add task ----
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

  const newTask = manager.addTask(formData);
  renderTaskCard(newTask);

  taskForm.reset();
  taskForm.classList.remove("was-validated");
});

renderSampleTasks();
