package com.example.ManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    private String unitNo;
    private double rentalRate;
    public String icNo;
    public double amountDue;
    public String rentalDate;
    public String tenantName;
    public String email;
    public String mailingAddress;
    public String companyName;
    public String contactNo;
}
