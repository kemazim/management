package com.example.ManagementSystem.repository;


import com.example.ManagementSystem.model.Records;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecordRepository extends JpaRepository<Records, String> {

//    @Query(value = "SELECT * FROM records limit 1", nativeQuery = true)
//    Optional<Records> findByUnitNo(String unitNo);
    Optional<Records> findByUnitNoAndICNo(String unitNo, String ICNo);

}
