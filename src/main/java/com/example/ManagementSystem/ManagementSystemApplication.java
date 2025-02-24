package com.example.ManagementSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManagementSystemApplication.class, args);
	}

}


/*
Client hantar req to controller
controller to service
service to repository
repository perform db op and return result to service
service process and send result to controller
controller send back http response to client
 */