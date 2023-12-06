package com.purdue.digitalbulletinboardserver.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class User {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String password;
    private String status;
    private LocalDateTime createdTime;
    private LocalDateTime updatedTime;
    private String updatedBy;

    public User(){}

    public User(int id,String role,String password,String status,LocalDateTime createdTime,LocalDateTime updatedTime,String updatedBy)
    {
        this.id=id;
        this.role=role;
        this.password=password;
        this.status=status;
        this.createdTime=createdTime;
        this.updatedTime=updatedTime;
        this.updatedBy=updatedBy;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", role='" + role + '\'' +
                ", password='" + password + '\'' +
                ", status='" + status + '\'' +
                ", createdTime=" + createdTime +
                ", updatedTime=" + updatedTime +
                ", updatedBy='" + updatedBy + '\'' +
                '}';
    }
}
