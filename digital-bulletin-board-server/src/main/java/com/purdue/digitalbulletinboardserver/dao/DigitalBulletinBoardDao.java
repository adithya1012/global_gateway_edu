package com.purdue.digitalbulletinboardserver.dao;

import com.purdue.digitalbulletinboardserver.model.Attachment;
import com.purdue.digitalbulletinboardserver.model.Message;
import com.purdue.digitalbulletinboardserver.model.Post;
import com.purdue.digitalbulletinboardserver.model.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
public interface DigitalBulletinBoardDao {
    @Select("SELECT id as id, msg as msg,updated_time as updatedMessageTime,post_id as postId,user_id as userId FROM messages")
    List<Message> getMessages();


    @Insert("insert into messages (msg,updated_time,post_id,user_id)values(#{messages.msg},#{messages.updatedMessageTime},#{messages.postId},#{messages.userId})")
    void addMessage(@Param("messages")Message messages);

//    @Insert(
//            "<script> insert into messages (msg, updated_time, post_id, user_id) values <foreach item='item' collection='messages' separator=','>#{item.msg}, #{item.updatedMessageTime}, #{item.postId}, #{item.userId})</foreach></script>"
//    )
//    void addMessage(@Param("messages") List<Message> messages);


    @Select("select post_id as postId,header as header,body as body,status as status,created_time as createdTime,updated_time as updatedTime,updated_by as updatedBy,user_id as userId from post where post_id=#{postId}")
    List<Post> getPostById(int postId);

    @Select("select post_id as postId,header as header,body as body,status as status,created_time as createdTime,updated_time as updatedTime,updated_by as updatedBy,user_id as userId from post")
//    @Select("select p.post_id as postId,p.header as header,p.body as body,p.status as status,p.created_time as createdTime,p.updated_time as updatedTime,p.updated_by as updatedBy,p.user_id as userId," +
//            "a.url as url,a.updated_time as updatedAttachmentTime,m.msg as msg,m.updated_time as updatedMessageTime " +
//            "from post p left join attachments a on p.post_id=a.post_id left join messages m on p.post_id=m.post_id")
    List<Post> getAllPosts();

    @Insert("insert into post (header,body,status,created_time,updated_time,updated_by,user_id)values(#{post.header},#{post.body},#{post.status},#{post.createdTime},#{post.updatedTime},#{post.updatedBy},#{post.userId})")
    void addPost(@Param("post")Post post);

//    @Update("update post set header=#{post.header},body=#{post.body},status=#{post.status},created_time=#{post.createdTime},updated_time=#{post.updatedTime},user_id=#{post.userId} where post_id=#{postId}")
//    List<Post> updatePost(int postId,Post updatedPost);
    @Select("select id as id, first_name as firstName,last_name as lastName,email as email,role as role,password as password,status as status,created_time as createdTime,updated_time as updatedTime,updated_by as updatedBy from user")
    List<User> getAllUsers();

    @Select("select id as id, first_name as firstName,last_name as lastName,email as email,role as role,password as password,status as status,created_time as createdTime,updated_time as updatedTime,updated_by as updatedBy from user where id=#{id}")
    List<User> getUserById(int id);

    @Insert("insert into user (first_name,last_name,email,role,password,status,created_time,updated_time,updated_by)values(#{user.firstName},#{user.lastName},#{user.email},#{user.role},#{user.password},#{user.status},#{user.createdTime},#{user.updatedTime},#{user.updatedBy}) ")
    void addUser(@Param("user")User user);

    @Select("select id as id,url as url,updated_time as updatedAttachmentTime,post_id as postId from attachments")
    List<Attachment> getAttachments();

    @Insert("insert into attachments(url,updated_time,post_id)values(#{attachments.url},#{attachments.updatedAttachmentTime},#{attachments.postId})")
    void addAttachment(@Param("attachments")Attachment attachments);

    @Select("select id as id, first_name as firstName, last_name as lastName, email as email, role as role, password as password, status as status, created_time as createdTime, updated_time as updatedTime, updated_by as updatedBy from user where email=#{email}")
    User getUserByEmail(String email);


    @Select("SELECT LAST_INSERT_ID()")
    int getLastInsertedPostId();

//    void updatePost(List<Post> existingPost);



    @Update("UPDATE post SET header=#{post.header}, body=#{post.body}, status=#{post.status}, updated_time=#{post.updatedTime}, updated_by=#{post.updatedBy} WHERE post_id=#{post.postId}")
    void updatePost(@Param("post") Post post);

    @Update("UPDATE messages SET msg=#{message.msg}, updated_time=#{message.updatedMessageTime} WHERE id=#{message.id}")
    void updateMessage(@Param("message") Message message);

    @Update("UPDATE attachments SET url=#{attachment.url}, updated_time=#{attachment.updatedAttachmentTime} WHERE id=#{attachment.id}")
    void updateAttachment(@Param("attachment") Attachment attachment);


    @Select("SELECT COUNT(*) FROM post WHERE post_id=#{postId}")
    int countPostsById(int postId);




    @Select("select post_id as postId, header as header, body as body, status as status, created_time as createdTime, updated_time as updatedTime, updated_by as updatedBy, user_id as userId from post where post_id=#{postId}")
    Post getPostsById(int postId);

    @Delete("DELETE FROM post WHERE post_id=#{postId}")
    void deletePost(int postId);

    @Delete("DELETE FROM messages WHERE post_id=#{postId}")
    void deleteMessagesForPost(int postId);

    @Delete("DELETE FROM attachments WHERE post_id=#{postId}")
    void deleteAttachmentsForPost(int postId);


    @Delete("DELETE FROM messages WHERE id=#{messageId}")
    void deleteMessageById(@Param("messageId") int messageId);


    @Delete("DELETE FROM attachments WHERE id=#{attachmentId}")
    void deleteAttachmentById(@Param("attachmentId") int attachmentId);

    @Delete("DELETE FROM messages WHERE post_id=#{postId}")

    void deleteMessagesByPostId(@Param("postId") int postId);

    void setPostId(Post post, int postId);


}
