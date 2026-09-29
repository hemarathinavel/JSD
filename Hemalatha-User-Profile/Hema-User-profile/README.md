# GenChat - Spring Boot Group Chat MVP

## Features
- User registration with BCrypt password hashing
- HTTP Basic authentication for protected endpoints
- REST APIs for messages
- H2 file database with persistence across restarts
- Input validation and error handling
- Simple browser frontend
- JUnit/Mockito tests
- Docker + Docker Compose

## Run locally
Requirements: Java 17 and Maven 3.9+

```bash
mvn clean test
mvn spring-boot:run
```
Open http://localhost:8080

## Endpoints
- POST /api/users/register (public)
- GET /api/messages (Basic Auth)
- POST /api/messages (Basic Auth)

## Docker
```bash
docker compose up --build
```

## Example registration
```json
{"username":"hema","password":"1234"}
```

Do not use sample passwords in a real deployment.
