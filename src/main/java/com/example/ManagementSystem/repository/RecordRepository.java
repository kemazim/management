package com.example.ManagementSystem.repository;


import com.example.ManagementSystem.model.Records;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface RecordRepository extends JpaRepository<Records, String> {

//    @Query(value = "SELECT * FROM records limit 1", nativeQuery = true)
//    Optional<Records> findByUnitNo(String unitNo);
    Optional<Records> findByUnitNoAndICNo(String unitNo, String ICNo);

    @Modifying
    @Transactional
    @Query(value = "UPDATE records SET rental_rate = ?2 WHERE unit_no = ?1", nativeQuery = true)
    int updateRecord(String unitNo, String rentalRate);
}
