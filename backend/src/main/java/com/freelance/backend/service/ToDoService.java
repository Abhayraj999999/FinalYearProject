package com.freelance.backend.service;

import com.freelance.backend.dto.ToDoDto;

import java.util.List;

public interface ToDoService {
    List<ToDoDto> findAllTasks();
    ToDoDto addTask(ToDoDto toDoDto);
    void updateSts(Long id, String status);
    void deleteItem(Long id);
    ToDoDto findById(Long id);
}
