// classes.js
// Defines the Task class (a single task's data) and the TaskManager class
// (keeps the array of tasks and handles add/delete logic).

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
  }

  // Creates a new Task from form data, gives it a unique id,
  // stores it in the tasks array, and returns it.
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

    return newTask;
  }

  // Removes the task with the given id from the tasks array.
  // Returns true if a task was found and removed, false otherwise.
  deleteTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      return false;
    }

    this.tasks.splice(index, 1);
    return true;
  }

  // Finds a single task by id (used before deleting, editing, etc.)
  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  // Returns all current tasks.
  getAllTasks() {
    return this.tasks;
  }
}
