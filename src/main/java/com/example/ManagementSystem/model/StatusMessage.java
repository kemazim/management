package com.example.ManagementSystem.model;

public class StatusMessage {

    private String status;
    private String message;

    public String getMessage() {
        return message;
    }

    public String getStatus() {
        return status;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public StatusMessage() {}

    public StatusMessage(String status,String message){
        this.status = status;
        this.message = message;
    }
}
