package com.purdue.digitalbulletinboardserver.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDateTime;


@Getter
@Setter

public class Attachment {
    private int id;
    private String url;
    private LocalDateTime updatedAttachmentTime;
    private int postId;
    private String name;
    private byte[] data;
    @JsonIgnore
    private File file;



    public Attachment(){
        this.data = new byte[0];
    }

    public Attachment(int id,String url,LocalDateTime updatedAttachmentTime,int postId,String name,byte[] data)
    {
        this.id=id;
        this.url=url;
        this.updatedAttachmentTime=updatedAttachmentTime;
        this.postId=postId;
        this.name=name;
        this.data = data;
        this.file=file;
    }

    @Override
    public String toString() {
        return "Attachment{" +
                "id=" + id +
                ", url='" + url + '\'' +
                '}';
    }

}
