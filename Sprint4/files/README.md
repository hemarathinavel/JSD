# Task Manager Backend (Sprint 4)

Spring Boot REST API for the Task Board project. Uses Web, JPA, and Validation
starters, an H2 file-based database, and runs on port 8080 with CORS enabled.

## Requirements

- Java 17+
- Maven (or use the included `mvnw` wrapper if your team adds one)

## Run it

```bash
mvn spring-boot:run
```

The API will be available at `http://localhost:8080/api/tasks`.
The H2 console (to browse the database in a browser) is at
`http://localhost:8080/h2-console` — use JDBC URL `jdbc:h2:file:./data/taskdb`,
username `sa`, empty password.

## Run the tests

```bash
mvn test
```

This runs `TaskControllerTests`, which covers all four routes (GET, POST, PUT,
DELETE) with both success and error cases (validation failures, not-found ids).

## API routes

| Method | Path              | Description                     | Success | Error cases |
|--------|-------------------|----------------------------------|---------|-------------|
| GET    | /api/tasks        | List all tasks                   | 200     | —           |
| GET    | /api/tasks/{id}   | Get one task                     | 200     | 404 if missing |
| POST   | /api/tasks        | Create a task                    | 201     | 400 if invalid |
| PUT    | /api/tasks/{id}   | Update a task                    | 200     | 400 invalid, 404 missing |
| DELETE | /api/tasks/{id}   | Delete a task                    | 204     | 404 if missing |

### Task JSON shape

```json
{
  "name": "Write tests",
  "description": "Cover the Task API",
  "assignedTo": "Hema",
  "dueDate": "2026-10-10",
  "status": "TODO"
}
```

`status` must be one of: `TODO`, `IN_PROGRESS`, `REVIEW`, `DONE`.

## Testing with Postman

Import `postman_collection.json` into Postman. It has one request per route,
covering both success and failure cases (blank fields, malformed JSON,
non-existent ids). Update the `taskId` collection variable to an id that
actually exists in your database before running the "success" GET/PUT/DELETE
requests.

## Connecting the frontend

The Sprint 1-3 frontend (`task-board/`) currently reads/writes to Local
Storage. To connect it to this backend instead, replace the `TaskManager`'s
`load()`/`save()`/`addTask()`/`deleteTask()`/`updateTask()` internals with
`fetch()` calls to `http://localhost:8080/api/tasks` (CORS is already enabled
for `/api/**`, so the frontend can call it directly from the browser).

## Bonus (optional, for the extra 4 points)

Pick ONE of:
- **Auth**: add Spring Security with HTTP Basic or JWT on top of these routes.
- **Deployment**: deploy this backend (e.g. to Render, Railway, or Heroku)
  and the frontend (e.g. to Netlify or GitHub Pages), and point the frontend's
  `fetch` calls at the deployed backend URL instead of `localhost`.
