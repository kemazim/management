package com.example.ManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Entity
public class Records {

    @Id
    private String unitNo;

    private double rentalRate;

    private String ICNo;

    private String tenantName;

    private String email;

    private String mailingAddress;

    private String companyName;

    private String contactNo;

    private double amountDue;

    private LocalDateTime rentalDate; // Use LocalDateTime for datetime fields

    public Records(String unitNo, double rentalRate,String ICNo, String tenantName, String email,
                   String mailingAddress,String companyName, String contactNo, double amountDue, LocalDateTime rentalDate){
        this.unitNo = unitNo;
        this.rentalRate = rentalRate;
        this.ICNo = ICNo;
        this.tenantName = tenantName;
        this.email = email;
        this.mailingAddress = mailingAddress;
        this.companyName = companyName;
        this.contactNo = contactNo;
        this.amountDue = amountDue;
        this.rentalDate = rentalDate;
    }

    public Records(){

    }
}