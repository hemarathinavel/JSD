package com.sac.taskmanager.repository;

import com.sac.taskmanager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // CRUD methods (findAll, findById, save, deleteById, etc.) come for free
    // from JpaRepository — no extra code needed for the routes this API exposes.
}
