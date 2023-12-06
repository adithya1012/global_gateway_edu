package com.purdue.digitalbulletinboardserver.controller;

import com.purdue.digitalbulletinboardserver.dao.DigitalBulletinBoardDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import com.purdue.digitalbulletinboardserver.model.*;


@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private DigitalBulletinBoardDao dao;

    @GetMapping("/getuser")
    public List<User> getUser(@RequestParam("id") int id){return dao.getUserById(id);}

    @GetMapping("/getuserbyemail")
    public User getUserByEmail(@RequestParam("email")String email){
        User user=dao.getUserByEmail(email);
        return user;
    }

    @PostMapping("/adduser")
    public User addUser(@RequestBody User user){
        dao.addUser(user);
        return user;
    }

}
