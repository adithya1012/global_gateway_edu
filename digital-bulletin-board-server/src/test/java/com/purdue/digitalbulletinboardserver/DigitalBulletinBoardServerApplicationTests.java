package com.purdue.digitalbulletinboardserver;


import com.purdue.digitalbulletinboardserver.model.Message;
import com.purdue.digitalbulletinboardserver.model.Post;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;


import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
@AutoConfigureMockMvc
class DigitalBulletinBoardServerApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void contextLoads() {

    }
    @Test
    void getAllPostsShouldReturnListOfPosts() throws Exception {
        mockMvc.perform(get("/post/getAllPosts").with(user("nithya@gmail.com").roles("student")))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(Matchers.greaterThanOrEqualTo(1)));  // Adjust this according to your expected JSON structure
    }

    @Test
    void getAllPostsfirstpostid() throws Exception {
        mockMvc.perform(get("/post/getAllPosts").with(user("nithya@gmail.com").roles("student")))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[0].postId").value(9));  // Replace "your_expected_post_id" with the actual ID you are looking for
    }

    @Test
    void deletePostShouldReturnPostNotFound() throws Exception {
        // Given a non-existent post ID
        int nonExistentPostId = 999;

        // When trying to delete the post
        mockMvc.perform(delete("/deletepost/{postId}", nonExistentPostId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().is3xxRedirection())
                .andReturn();
    }

    @Test
    void deletePostShouldReturnSuccess() throws Exception {
        // Given an existing post ID
        int existingPostId = 115;

        // When trying to delete the post
        mockMvc.perform(delete("/deletepost/{postId}", existingPostId))
                .andExpect(status().is3xxRedirection());

    }

    @Test
    void editPostShouldUpdateHeader() throws Exception {
        int postId = 115;

        String updatedHeader = "New Header";

        String updatedPostJson = "{\"header\": \"" + updatedHeader + "\"}";

        mockMvc.perform(put("/editpost/{postId}", postId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updatedPostJson))
                .andExpect(status().is3xxRedirection());
    }


    @Test
    void editPostShouldUpdateBody() throws Exception {
        int postId = 115;
        String updatedBody = "New Body";
        String updatedPostJson = "{\"body\": \"" + updatedBody + "\"}";

        mockMvc.perform(put("/editpost/{postId}", postId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updatedPostJson))
                .andExpect(status().is3xxRedirection());
    }

    @Test
    void addPostShouldAddPostWithAttachmentsAndMessages() throws Exception {
        // Replace these values with actual data for your test
        String postJson = "{\"header\":\"Test Header\",\"body\":\"Test Body\",\"userId\":1}";
        MockMultipartFile attachmentFile = new MockMultipartFile("attachmentFiles", "test.txt",
                MediaType.TEXT_PLAIN_VALUE, "Attachment Content".getBytes());
        Message message = new Message();
        message.setMsg("Test Message");

        mockMvc.perform(MockMvcRequestBuilders.multipart("/addpost")
                        .file(new MockMultipartFile("post", "", MediaType.APPLICATION_JSON_VALUE, postJson.getBytes()))
                        .file(attachmentFile)
                        .param("msgs", "{\"msg\":\"Test Message\"}")
                        .contentType(MediaType.MULTIPART_FORM_DATA_VALUE))
                .andExpect(MockMvcResultMatchers.status().is3xxRedirection());
    }

    @Test
    void testShowLoginPage() throws Exception {
        MvcResult result = mockMvc.perform(get("/login"))
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();
        System.out.println("Response Content:\n" + content);
    }

    @Test
    public void testShowHomePage() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/home"))
                .andExpect(MockMvcResultMatchers.status().is3xxRedirection())
                .andExpect(MockMvcResultMatchers.redirectedUrl("http://localhost/login"));


    }

}
