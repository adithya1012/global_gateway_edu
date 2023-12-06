package com.purdue.digitalbulletinboardserver;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

//@ComponentScan("com.purdue.digitalbulletinboardserver.dao")
public class DigitalBulletinBoardServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(DigitalBulletinBoardServerApplication.class, args);
    }
}