// classes.js
// Defines the Task class (a single task's data) and the TaskManager class
// (keeps the array of tasks, handles add/delete/update/assign logic, and
// persists everything to Local Storage).

const STORAGE_KEY = "sac_task_board_tasks";

class Task {
  constructor(id, name, description, assignedTo, dueDate, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.status = status;
  }

  // Returns this task as a plain JSON-friendly object.
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      assignedTo: this.assignedTo,
      dueDate: this.dueDate,
      status: this.status,
    };
  }
}

class TaskManager {
  constructor() {
    this.tasks = []; // array of Task objects
    this.nextId = 1; // used to hand out unique, incrementing ids
    this.load(); // restore any previously saved tasks from Local Storage
  }

  // Creates a new Task from form data, gives it a unique id,
  // stores it in the tasks array, persists to Local Storage, and returns it.
  addTask({ name, description, assignedTo, dueDate, status }) {
    const newTask = new Task(
      this.nextId,
      name,
      description,
      assignedTo,
      dueDate,
      status
    );

    this.tasks.push(newTask);
    this.nextId++;
    this.save();

    return newTask;
  }

  // Removes the task with the given id from the tasks array and
  // persists the change. Returns true if a task was found and removed.
  deleteTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      return false;
    }

    this.tasks.splice(index, 1);
    this.save();
    return true;
  }

  // Updates an existing task's fields (name, description, assignedTo,
  // dueDate, status) and persists the change. Returns the updated task,
  // or null if no task with that id exists.
  updateTask(id, { name, description, assignedTo, dueDate, status }) {
    const task = this.getTaskById(id);

    if (!task) {
      return null;
    }

    if (name !== undefined) task.name = name;
    if (description !== undefined) task.description = description;
    if (assignedTo !== undefined) task.assignedTo = assignedTo;
    if (dueDate !== undefined) task.dueDate = dueDate;
    if (status !== undefined) task.status = status;

    this.save();
    return task;
  }

  // Updates just the "assignedTo" field of a task and persists the change.
  // Returns the updated task, or null if no task with that id exists.
  assignTo(id, assignedTo) {
    const task = this.getTaskById(id);

    if (!task) {
      return null;
    }

    task.assignedTo = assignedTo;
    this.save();
    return task;
  }

  // Finds a single task by id.
  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  // Returns all current tasks.
  getAllTasks() {
    return this.tasks;
  }

  // ---- Local Storage persistence ----

  // Saves the current tasks array and nextId counter to Local Storage.
  save() {
    const payload = {
      tasks: this.tasks.map((task) => task.toJSON()),
      nextId: this.nextId,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  // Loads tasks (and the nextId counter) back from Local Storage, if any
  // were previously saved. Called automatically when a TaskManager is created.
  load() {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return;
    }

    try {
      const payload = JSON.parse(raw);
      this.tasks = payload.tasks.map(
        (t) => new Task(t.id, t.name, t.description, t.assignedTo, t.dueDate, t.status)
      );
      this.nextId = payload.nextId || this.tasks.length + 1;
    } catch (err) {
      console.error("Could not load saved tasks from Local Storage:", err);
      this.tasks = [];
      this.nextId = 1;
    }
  }

  // Clears all saved tasks from Local Storage (handy for tests).
  clearStorage() {
    localStorage.removeItem(STORAGE_KEY);
  }
}
