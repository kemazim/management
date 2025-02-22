package com.example.ManagementSystem.service;

import com.example.ManagementSystem.model.Records;
import com.example.ManagementSystem.repository.RecordRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RecordService {

    private final RecordRepository recordRepository;

    public RecordService(RecordRepository recordRepository) {
        this.recordRepository = recordRepository;
    }

//    public Optional<Records> getRecordByUnitNo(String unitNo) {
////        if(unitNo != "0") throw new RuntimeException("Error salah");
//        System.out.println(unitNo);
//        return recordRepository.findByUnitNo(unitNo);
//    }

    public void load() {
        // arrayList to store store records objects
        List<Records> jobs =
                new ArrayList<>(List.of(
                        new Records("Unit 1",200.00,"123456789876","Akmal","akmal@gmail.com", "Ampang","Company1","0123456789", 0.00, LocalDateTime.now()),
                        new Records("Unit 2", 400.00, "98765432101", "Hakeem","hakeem@gmail.com", "Setiawangsa","Company2","01234567469", 100.00,LocalDateTime.now()),
                        new Records("Unit 3", 500.00, "9876540052101", "Firdaus","firdaus@gmail.com", "Gombak","Company3","01462656259", 0.00,LocalDateTime.now()),
                        new Records("Unit 4", 350.00, "987656552101", "Nadhirah","nadhirah@gmail.com", "Subang","Company4","01764567469", 10.00,LocalDateTime.now())
                ));

        recordRepository.saveAll(jobs);

    }

}
