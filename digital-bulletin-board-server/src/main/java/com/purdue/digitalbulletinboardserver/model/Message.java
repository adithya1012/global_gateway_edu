package com.purdue.digitalbulletinboardserver.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class Message {
    private int id;
    private int postId;
    private int userId;
    private String msg;
    private LocalDateTime updatedMessageTime;
    private List<User> user;

    public Message(){}

    public Message(int id,int postId,int userId,String msg,LocalDateTime updatedMessageTime,List<User> user){
        this.id=id;
        this.postId=postId;
        this.userId=userId;
        this.msg=msg;
        this.updatedMessageTime=updatedMessageTime;
        this.user=user;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", postId=" + postId +
                ", userId=" + userId +
                ", msg='" + msg + '\'' +
                '}';
    }

}
