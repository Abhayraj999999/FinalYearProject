package com.freelance.backend.service.impl;

import com.freelance.backend.dto.ToDoDto;
import com.freelance.backend.model.ToDo;
import com.freelance.backend.repository.ToDoRepository;
import com.freelance.backend.service.ToDoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ToDoServiceImpl implements ToDoService {
    private final ToDoRepository toDoRepository;
    @Override
    public List<ToDoDto> findAllTasks() {
        List<ToDo> toDo = toDoRepository.findAll();
        return toDo.stream().map(task -> {
            ToDoDto toDoDto = new ToDoDto();
            BeanUtils.copyProperties(task, toDoDto);
            return toDoDto;
        }).toList();
    }

    @Override
    public ToDoDto addTask(ToDoDto toDoDto) {
        ToDo toDo = toDoRepository.save(dtoTOModelConverter(toDoDto));
        BeanUtils.copyProperties(toDo, toDoDto);
        return toDoDto;
    }

    public ToDo dtoTOModelConverter(ToDoDto toDoDto) {
        ToDo toDo = new ToDo();
        BeanUtils.copyProperties(toDoDto, toDo);
        toDo.setCreatedAt(java.time.Instant.now());
        toDo.setUpdatedAt(java.time.Instant.now());
        return toDo;
    }

    @Override
    public void updateSts(Long id, String status) {
        toDoRepository.updateStatus(id, status);
    }

    @Override
    public void deleteItem(Long id){
        log.error("MS 2");
        toDoRepository.deleteById(id);
    }

    @Override
    public ToDoDto findById(Long id){
        ToDo toDo = toDoRepository.findById(id).orElseThrow(() -> new RuntimeException("Rask not found with id "+id));
        ToDoDto toDoDto = new ToDoDto();
        BeanUtils.copyProperties(toDo, toDoDto);
        return toDoDto;
    }
}
