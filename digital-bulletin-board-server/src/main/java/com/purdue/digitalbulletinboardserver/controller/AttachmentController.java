package com.purdue.digitalbulletinboardserver.controller;

import com.purdue.digitalbulletinboardserver.dao.DigitalBulletinBoardDao;
import com.purdue.digitalbulletinboardserver.model.Attachment;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("attachment")
@CrossOrigin("*")
public class AttachmentController {

    private final DigitalBulletinBoardDao dao;

    public AttachmentController(DigitalBulletinBoardDao dao){
        this.dao = dao;
    }

    @PostMapping("/addattachment")
    public Attachment addAttachment(@RequestBody Attachment attachment){
        String fileUrl = "assets/images/" + attachment.getName();

        attachment.setUrl(fileUrl);
        System.out.println("---------File--------"+ fileUrl);
        dao.addAttachment(attachment);
        return attachment;
    }



}
