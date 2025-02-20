package com.example.ManagementSystem.controller;

import com.example.ManagementSystem.model.User;
import com.example.ManagementSystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{unitNo}")
    public Optional<User> getUserById(@PathVariable String unitNo){
        return userService.getBookByUnitNo(unitNo);
    }
}
