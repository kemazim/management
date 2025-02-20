package com.example.ManagementSystem.service;

import com.example.ManagementSystem.model.User;
import com.example.ManagementSystem.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> getBookByUnitNo(String unitNo) {
        if(unitNo != "0") throw new RuntimeException("Error salah");
        return userRepository.findById(unitNo);
    }
}
