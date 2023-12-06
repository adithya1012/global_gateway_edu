package com.purdue.digitalbulletinboardserver.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class Post {
    private int postId;
    private String header;
    private String body;
    private String status;
    private LocalDateTime createdTime;
    private LocalDateTime updatedTime;
    private String updatedBy;
    private int userId;
    private List<Attachment> attachments;
    private List<Message> messages;
    private List<User> user;


    public Post(){}

    public Post(int postId,String header,String body,String status,LocalDateTime createdTime,LocalDateTime updatedTime,String updatedBy,int userId,List<Attachment> attachments,List<Message> messages,List<User> user)
    {
        this.postId=postId;
        this.header=header;
        this.body=body;
        this.status=status;
        this.createdTime=createdTime;
        this.updatedTime=updatedTime;
        this.updatedBy=updatedBy;
        this.userId=userId;
        this.attachments=attachments;
        this.messages=messages;
        this.user=user;


    }

    @Override
    public String toString() {
        return "Post{" +
                "postId=" + postId +
                ", header='" + header + '\'' +
                ", body='" + body + '\'' +
                ", attachments=" + attachments +
                ", messages=" + messages +
                '}';
    }

}
