package com.freelance.backend.controller;

import java.util.List;
import com.freelance.backend.dto.ToDoDto;
import com.freelance.backend.dto.ToDoStatusUpdateDto;
import com.freelance.backend.service.impl.ToDoServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ToDoController {
    private final ToDoServiceImpl toDoServiceImpl;
    @GetMapping("/giveTasks")
    public ResponseEntity<List<ToDoDto>> giveTasks(){
        return ResponseEntity.ok(toDoServiceImpl.findAllTasks());
    }

    @PostMapping("/saveTask")
    public ResponseEntity<ToDoDto> saveTask(@RequestBody ToDoDto toDoDto){
        ToDoDto newToDoDto = toDoServiceImpl.addTask(toDoDto);
        return ResponseEntity.ok(newToDoDto);
    }
    @PutMapping("/updateStatus")
    public ResponseEntity<Boolean> updateStatus(@RequestBody ToDoStatusUpdateDto toDoStatusUpdateDto){
        toDoServiceImpl.updateSts(toDoStatusUpdateDto.getId(), toDoStatusUpdateDto.getStatus());
        return ResponseEntity.ok(true);
    }

    @DeleteMapping("/deleteTask/{id}")
    public ResponseEntity<Boolean> deleteTask(@PathVariable Long id){
        toDoServiceImpl.deleteItem(id);
        return ResponseEntity.ok(true);
    }
}
