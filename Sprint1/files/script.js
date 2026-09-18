// script.js
// Handles: rendering task cards into the list group, and validating +
// submitting the new task form.

// ---- Sample task data (at least 5 cards required by the rubric) ----
const sampleTasks = [
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
  {
    name: "Connect form submissions to the task list",
    description: "New tasks submitted through the form should appear at the top of the list.",
    assignedTo: "Hema",
    dueDate: "2026-09-30",
    status: "TODO",
  },
];

const taskList = document.getElementById("taskList");
const taskCardTemplate = document.getElementById("taskCardTemplate");
const taskForm = document.getElementById("taskForm");

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

// Builds one <li> task card from the template and a task object,
// then adds it to the top of the list.
function renderTaskCard(task, prepend = false) {
  const clone = taskCardTemplate.content.cloneNode(true);

  clone.querySelector(".task-card__name").textContent = task.name;
  clone.querySelector(".task-card__description").textContent = task.description;
  clone.querySelector(".task-card__assigned").textContent = task.assignedTo;
  clone.querySelector(".task-card__due").textContent = formatDate(task.dueDate);

  const statusEl = clone.querySelector(".task-card__status");
  statusEl.textContent = task.status;
  statusEl.classList.add(statusClass(task.status));

  if (prepend && taskList.firstChild) {
    taskList.insertBefore(clone, taskList.firstChild);
  } else {
    taskList.appendChild(clone);
  }
}

function renderSampleTasks() {
  sampleTasks.forEach((task) => renderTaskCard(task));
}

// ---- Form validation ----
// Uses Bootstrap's `was-validated` pattern along with the built-in
// `invalid-feedback` messages defined in index.html for each field.
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!taskForm.checkValidity()) {
    taskForm.classList.add("was-validated");
    return;
  }

  const newTask = {
    name: document.getElementById("name").value.trim(),
    description: document.getElementById("description").value.trim(),
    assignedTo: document.getElementById("assignedTo").value.trim(),
    dueDate: document.getElementById("dueDate").value,
    status: document.getElementById("status").value,
  };

  renderTaskCard(newTask, true);

  taskForm.reset();
  taskForm.classList.remove("was-validated");
});

renderSampleTasks();
