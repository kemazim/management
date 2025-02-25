package com.example.ManagementSystem.controller;

import com.example.ManagementSystem.model.Records;
import com.example.ManagementSystem.service.RecordService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class RecordController {

    private final RecordService recordService;

    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @GetMapping("/record")
    public ResponseEntity<Optional<Records>> getRecord(@RequestParam String unitNo) {
        Optional<Records> record = recordService.getRecordByUnitNo(unitNo);
        return record.isPresent() ? ResponseEntity.ok(record) : ResponseEntity.notFound().build();
    }

    @GetMapping("/getAllRecord")
    public List<Records> getAllRecord() {
       return recordService.getAllRecords();

        }

    @GetMapping("/countrecord")
    public String getCountRecord(@RequestBody Records record) {
        return recordService.getCountRecord(record);
    }

    @GetMapping("/load")
    public String loadData() {
        recordService.load();
        return "success";
    }

    @PostMapping("/record")
    public Records addRecord(@RequestBody Records record) {
        return recordService.addRecord(record);
    }

    @DeleteMapping("/deleterecord")
    public ResponseEntity<String> deleteRecord(@RequestParam String unitNo, @RequestParam String icNo) {
        String result = recordService.deleteRecord(unitNo, icNo);
        return "Record Not Found".equals(result) ? ResponseEntity.badRequest().body(result) : ResponseEntity.ok(result);
    }
}
