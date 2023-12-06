package com.purdue.digitalbulletinboardserver.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.purdue.digitalbulletinboardserver.dao.DigitalBulletinBoardDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.purdue.digitalbulletinboardserver.model.*;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
@RequestMapping("/post")
@CrossOrigin("*")
public class PostController {

    @Autowired
    private DigitalBulletinBoardDao dao;

    private static final Logger logger = LoggerFactory.getLogger(PostController.class);

//    @CrossOrigin(origins = "http://localhost:4200")


    @GetMapping("/getpost")
    public List<Post> getPost(@RequestParam("postId") int postId) {
        return dao.getPostById(postId);
    }

    @GetMapping("/getAllPosts")
    public List<Post> getAllPost() {
        List<Post> posts = dao.getAllPosts();
        List<Attachment> attachments = dao.getAttachments();
        List<Message> messages = dao.getMessages();
        Map<Integer, List<Attachment>> attachmentMap = new HashMap<>();
        Map<Integer, List<Message>> messageMap = new HashMap<>();
        attachments.forEach(attachment -> {
            if (attachmentMap.containsKey(attachment.getPostId())) {
                attachmentMap.get(attachment.getPostId()).add(attachment);
            } else {
                List<Attachment> att = new ArrayList<>();
                att.add(attachment);
                attachmentMap.put(attachment.getPostId(), att);
            }
        });
        messages.forEach(message -> {
            if (messageMap.containsKey(message.getPostId())) {
                messageMap.get(message.getPostId()).add(message);
            } else {
                List<Message> msg = new ArrayList<>();
                msg.add(message);
                messageMap.put(message.getPostId(), msg);
            }
            List<User> user = dao.getUserById(message.getUserId());
            if (!user.isEmpty()) {
                message.setUser(user);
            }
        });
        for (Post post : posts) {
            List<User> user = dao.getUserById(post.getUserId());
            post.setUser(user);
            post.setAttachments(attachmentMap.get(post.getPostId()));
            post.setMessages(messageMap.get(post.getPostId()));
        }
        return posts;
    }

    @PostMapping(value = "/addpost", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> addPost(
            @RequestPart("post") String postJson,
            @RequestPart(value = "attachmentFiles", required = false) List<MultipartFile> files,
            @RequestPart(value = "msgs", required = false) List<Message> msgs) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Post post = objectMapper.readValue(postJson, Post.class);
            post.setCreatedTime(LocalDateTime.now());
            dao.addPost(post);

            int postId = dao.getLastInsertedPostId();

            // Process file uploads if files are provided
            if (files != null && !files.isEmpty()) {
                for (MultipartFile file : files) {
                    Attachment attachment = new Attachment();
                    attachment.setName(file.getOriginalFilename());
                    attachment.setData(file.getBytes());
                    attachment.setPostId(postId);

                    String uploadFolder = "attachments";
                    String fileName = attachment.getName();
                    Path filePath = Paths.get(uploadFolder, fileName);

                    System.out.println("Absolute Path: " + filePath.toAbsolutePath());
                    System.out.println("Attachment Data Size (pre-write): " + attachment.getData().length);

                    Files.write(filePath, attachment.getData());

                    System.out.println("Attachment Data Size (post-write): " + attachment.getData().length);

                    String fileUrl = "/attachments/" + fileName;
                    attachment.setUrl(fileUrl);

                    dao.addAttachment(attachment);
                }
            }

            // Add messages if msgs are provided
            if (msgs != null && !msgs.isEmpty()) {
                msgs.forEach(message -> {
                    message.setPostId(postId);
                    message.setUserId(post.getUserId());
                    dao.addMessage(message);
                });
            }

            return ResponseEntity.ok("Post added successfully!");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error adding post: " + e.getMessage());
        }
    }


    @PutMapping("/editpost/{postId}")
    public ResponseEntity<String> editPost(@PathVariable int postId, @RequestBody Post updatedPost) {
        try {
            // Check if the post with the given ID exists
            if (dao.countPostsById(postId) > 0) {
                // Update the post
                updatedPost.setPostId(postId);
                dao.updatePost(updatedPost);

                // Update attachments and messages if needed
                updateAttachmentsAndMessages(postId, updatedPost.getAttachments(), updatedPost.getMessages());

                return new ResponseEntity<>("Post updated successfully", HttpStatus.OK);
            } else {
                // If the post does not exist, return a 404 Not Found response
                return new ResponseEntity<>("Post not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            // Log the exception for troubleshooting
            e.printStackTrace();
            return new ResponseEntity<>("Error updating post: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    private void updateAttachmentsAndMessages(int postId, List<Attachment> updatedAttachments, List<Message> updatedMessages) {
        // Update existing attachments and messages
        if (updatedAttachments != null) {
            for (Attachment updatedAttachment : updatedAttachments) {
                dao.updateAttachment(updatedAttachment);
            }
        }

        if (updatedMessages != null) {
            for (Message updatedMessage : updatedMessages) {
                dao.updateMessage(updatedMessage);
            }
        }
    }

    @DeleteMapping("/deletepost/{postId}")
    public ResponseEntity<Object> deletePost(@PathVariable int postId) {
        try {
            // Check if the post with the given postId exists
            if (dao.countPostsById(postId) > 0) {
                // Delete attachments for the post first
                dao.deleteAttachmentsForPost(postId);

                // Delete messages for the post
                dao.deleteMessagesForPost(postId);

                // Now, delete the post
                dao.deletePost(postId);

                return new ResponseEntity<>("Post deleted successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Post not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return new ResponseEntity<>("Error deleting post", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

