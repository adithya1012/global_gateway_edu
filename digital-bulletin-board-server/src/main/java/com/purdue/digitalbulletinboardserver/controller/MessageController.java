package com.purdue.digitalbulletinboardserver.controller;

import com.purdue.digitalbulletinboardserver.dao.DigitalBulletinBoardDao;
import com.purdue.digitalbulletinboardserver.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDateTime;
import java.util.List;
@RestController
@RequestMapping("/message")
@CrossOrigin("*")
public class MessageController {

    @Autowired
    private DigitalBulletinBoardDao dao;

    @GetMapping("/getmessage/{id}")
    public List<Message> getMessage(@RequestParam("id") int id) {
        return dao.getMessages();
    }

    @GetMapping("/getallmessage")
    public List<Message> getMessages() {
        List<Message> messages = dao.getMessages();
        return messages;
    }

    @PostMapping("/addmessage")

    public ResponseEntity<String> addMessage(@RequestBody Message message) {
        try {
            message.setUpdatedMessageTime(LocalDateTime.now());
            dao.addMessage(message);
            return ResponseEntity.ok("Comment added successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error adding comment: " + e.getMessage());
        }


    }
}







