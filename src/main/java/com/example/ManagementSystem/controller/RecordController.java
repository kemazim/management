package com.example.ManagementSystem.controller;

import com.example.ManagementSystem.model.Records;
import com.example.ManagementSystem.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
//@RequestMapping("/api/user")
public class RecordController {

    @Autowired
    private final RecordService recordService;

    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

//    @GetMapping("/{unitNo}")
//    public Optional<Records> getRecordById(@PathVariable String unitNo){
//        return recordService.getRecordByUnitNo(unitNo);
//    }

    @GetMapping("/load")
    public String loadData() {
        recordService.load();
        return "success";
    }
}
