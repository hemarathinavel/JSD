// tests.js
// A small, dependency-free test runner for the Task Board app.
// Open tests.html in a browser to run these and see pass/fail results
// on the page (and in the console).
//
// Depends on classes.js and script.js already being loaded, so it can
// use TaskManager directly, plus the app's global `manager`, `taskList`,
// `taskForm`, `renderTaskCard`, and `handleDelete`.

const results = [];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

function test(name, fn) {
  try {
    fn();
    results.push({ name, passed: true });
  } catch (err) {
    results.push({ name, passed: false, error: err.message });
  }
}

// ---- TaskManager (model) tests: each uses its own isolated manager ---- //

test("TaskManager.addTask adds a new task to the tasks array", () => {
  const tm = new TaskManager();
  tm.clearStorage();
  tm.tasks = [];
  tm.nextId = 1;

  const task = tm.addTask({
    name: "Write tests",
    description: "Cover TaskManager methods",
    assignedTo: "Hema",
    dueDate: "2026-10-01",
    status: "TODO",
  });

  assert(tm.tasks.length === 1, "expected tasks array to have 1 item");
  assert(task.name === "Write tests", "new task should have the given name");
});

test("TaskManager.addTask assigns unique, incrementing ids", () => {
  const tm = new TaskManager();
  tm.clearStorage();
  tm.tasks = [];
  tm.nextId = 1;

  const t1 = tm.addTask({ name: "A", description: "d", assignedTo: "x", dueDate: "2026-10-01", status: "TODO" });
  const t2 = tm.addTask({ name: "B", description: "d", assignedTo: "x", dueDate: "2026-10-02", status: "TODO" });

  assert(t1.id !== t2.id, "each task should get a unique id");
  assert(t2.id === t1.id + 1, "ids should increment by 1");
});

test("TaskManager.deleteTask removes the task from the array", () => {
  const tm = new TaskManager();
  tm.clearStorage();
  tm.tasks = [];
  tm.nextId = 1;

  const task = tm.addTask({ name: "A", description: "d", assignedTo: "x", dueDate: "2026-10-01", status: "TODO" });
  const removed = tm.deleteTask(task.id);

  assert(removed === true, "deleteTask should return true when it removes a task");
  assert(tm.tasks.length === 0, "tasks array should be empty after delete");
  assert(tm.deleteTask(999) === false, "deleteTask should return false for an id that doesn't exist");
});

test("TaskManager.updateTask updates a task's fields", () => {
  const tm = new TaskManager();
  tm.clearStorage();
  tm.tasks = [];
  tm.nextId = 1;

  const task = tm.addTask({ name: "A", description: "d", assignedTo: "x", dueDate: "2026-10-01", status: "TODO" });
  const updated = tm.updateTask(task.id, { name: "A (updated)", status: "DONE" });

  assert(updated.name === "A (updated)", "name should be updated");
  assert(updated.status === "DONE", "status should be updated");
  assert(updated.id === task.id, "id should not change on update");
});

test("TaskManager.assignTo updates only the assignedTo field", () => {
  const tm = new TaskManager();
  tm.clearStorage();
  tm.tasks = [];
  tm.nextId = 1;

  const task = tm.addTask({ name: "A", description: "d", assignedTo: "x", dueDate: "2026-10-01", status: "TODO" });
  const updated = tm.assignTo(task.id, "Priya");

  assert(updated.assignedTo === "Priya", "assignedTo should be updated");
  assert(updated.name === "A", "other fields should stay the same");
});

// ---- UI tests: use the real app's global `manager`, `taskList`, `taskForm` ---- //

test("Adding a task through the form adds a card to the HTML task list", () => {
  const before = taskList.children.length;

  document.getElementById("name").value = "UI test task";
  document.getElementById("description").value = "Added by the UI test";
  document.getElementById("assignedTo").value = "Tester";
  document.getElementById("dueDate").value = "2026-10-05";
  document.getElementById("status").value = "TODO";

  taskForm.dispatchEvent(new Event("submit", { cancelable: true }));

  const after = taskList.children.length;
  assert(after === before + 1, "task list should have one more item after adding");

  const newCard = taskList.querySelector(".task-list__item");
  assert(
    newCard.textContent.includes("UI test task"),
    "the newest card should show the task name that was just submitted"
  );
});

test("Deleting a task removes its card from the HTML task list", () => {
  // Add one specifically to delete, so this test doesn't depend on order.
  const task = manager.addTask({
    name: "Task to delete",
    description: "Will be removed",
    assignedTo: "Tester",
    dueDate: "2026-10-06",
    status: "TODO",
  });
  renderTaskCard(task);

  const before = taskList.children.length;
  handleDelete(task.id);
  const after = taskList.children.length;

  assert(after === before - 1, "task list should have one fewer item after deleting");
  assert(
    taskList.querySelector(`[data-task-id="${task.id}"]`) === null,
    "the deleted task's card should no longer be in the DOM"
  );
});

// ---- Render results to the page ---- //

function renderResults() {
  const container = document.getElementById("testResults");
  const passCount = results.filter((r) => r.passed).length;

  const summary = document.createElement("p");
  summary.className = "test-summary";
  summary.textContent = `${passCount} / ${results.length} tests passed`;
  container.appendChild(summary);

  results.forEach((r) => {
    const item = document.createElement("li");
    item.className = "test-result " + (r.passed ? "test-result--pass" : "test-result--fail");
    item.textContent = (r.passed ? "PASS — " : "FAIL — ") + r.name + (r.error ? ` (${r.error})` : "");
    container.appendChild(item);
  });

  console.log(`${passCount}/${results.length} tests passed`, results);
}

renderResults();
