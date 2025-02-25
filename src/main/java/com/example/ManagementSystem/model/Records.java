package com.example.ManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
//@AllArgsConstructor
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

    public Records(){

    }
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

    public String getUnitNo() {return unitNo;}

    public void setUnitNo(String unitNo) {this.unitNo = unitNo;}

    public double getRentalRate() {return rentalRate;}

    public void setRentalRate(double rentalRate) {this.rentalRate = rentalRate;}

    public String getICNo() {return ICNo;}

    public void setICNo(String ICNo) {this.ICNo = ICNo;}

    public String getTenantName() {return tenantName;}

    public void setTenantName(String tenantName) {this.tenantName = tenantName;}

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public String getMailingAddress() {return mailingAddress;}

    public void setMailingAddress(String mailingAddress) {this.mailingAddress = mailingAddress;}

    public String getCompanyName() {return companyName;}

    public void setCompanyName(String companyName) {this.companyName = companyName;}

    public String getContactNo() {return contactNo;}

    public void setContactNo(String contactNo) {this.contactNo = contactNo;}

    public double getAmountDue() {return amountDue;}

    public void setAmountDue(double amountDue) {this.amountDue = amountDue;}

    public LocalDateTime getRentalDate() {return rentalDate;}

    public void setRentalDate(LocalDateTime rentalDate) {this.rentalDate = rentalDate;}
}