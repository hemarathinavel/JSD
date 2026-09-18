package com.sac.taskmanager.controller;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sac.taskmanager.model.Task;
import com.sac.taskmanager.model.TaskStatus;
import com.sac.taskmanager.repository.TaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class TaskControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private TaskRepository taskRepository;

    private final ObjectMapper objectMapper = new ObjectMapper()
            .findAndRegisterModules(); // registers the Java 8 date/time module for LocalDate

    @BeforeEach
    void cleanDatabase() {
        taskRepository.deleteAll();
    }

    // ---- POST /api/tasks ----

    @Test
    void createTask_withValidData_returns201AndSavedTask() throws Exception {
        Task task = new Task("Write tests", "Cover the Task API", "Hema", java.time.LocalDate.now().plusDays(3), TaskStatus.TODO);

        mockMvc.perform(post("/api/tasks")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(task)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.name", is("Write tests")))
                .andExpect(jsonPath("$.status", is("TODO")));
    }

    @Test
    void createTask_withBlankName_returns400WithValidationMessage() throws Exception {
        Task task = new Task("", "Cover the Task API", "Hema", java.time.LocalDate.now().plusDays(3), TaskStatus.TODO);

        mockMvc.perform(post("/api/tasks")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(task)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors.name").exists());
    }

    // ---- GET /api/tasks ----

    @Test
    void getAllTasks_returns200AndListOfTasks() throws Exception {
        taskRepository.save(new Task("A", "d", "x", java.time.LocalDate.now().plusDays(1), TaskStatus.TODO));
        taskRepository.save(new Task("B", "d", "x", java.time.LocalDate.now().plusDays(2), TaskStatus.DONE));

        mockMvc.perform(get("/api/tasks"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()", is(2)));
    }

    // ---- GET /api/tasks/{id} ----

    @Test
    void getTaskById_withValidId_returns200AndTask() throws Exception {
        Task saved = taskRepository.save(new Task("A", "d", "x", java.time.LocalDate.now().plusDays(1), TaskStatus.TODO));

        mockMvc.perform(get("/api/tasks/" + saved.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("A")));
    }

    @Test
    void getTaskById_withUnknownId_returns404() throws Exception {
        mockMvc.perform(get("/api/tasks/999999"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.status", is(404)));
    }

    // ---- PUT /api/tasks/{id} ----

    @Test
    void updateTask_withValidData_returns200AndUpdatedTask() throws Exception {
        Task saved = taskRepository.save(new Task("A", "d", "x", java.time.LocalDate.now().plusDays(1), TaskStatus.TODO));

        Task update = new Task("A (updated)", "d2", "y", java.time.LocalDate.now().plusDays(5), TaskStatus.DONE);

        mockMvc.perform(put("/api/tasks/" + saved.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(update)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("A (updated)")))
                .andExpect(jsonPath("$.status", is("DONE")));
    }

    @Test
    void updateTask_withUnknownId_returns404() throws Exception {
        Task update = new Task("A", "d", "x", java.time.LocalDate.now().plusDays(1), TaskStatus.TODO);

        mockMvc.perform(put("/api/tasks/999999")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(update)))
                .andExpect(status().isNotFound());
    }

    // ---- DELETE /api/tasks/{id} ----

    @Test
    void deleteTask_withValidId_returns204AndRemovesTask() throws Exception {
        Task saved = taskRepository.save(new Task("A", "d", "x", java.time.LocalDate.now().plusDays(1), TaskStatus.TODO));

        mockMvc.perform(delete("/api/tasks/" + saved.getId()))
                .andExpect(status().isNoContent());

        mockMvc.perform(get("/api/tasks/" + saved.getId()))
                .andExpect(status().isNotFound());
    }

    @Test
    void deleteTask_withUnknownId_returns404() throws Exception {
        mockMvc.perform(delete("/api/tasks/999999"))
                .andExpect(status().isNotFound());
    }
}
