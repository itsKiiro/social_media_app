package net.crazysoziety.backend.controller;

import net.crazysoziety.backend.model.Post;
import net.crazysoziety.backend.model.User;
import net.crazysoziety.backend.service.UploadServiceImpl;
import net.crazysoziety.backend.service.UserServiceImpl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/upload")
public class UploadController {

    private final UploadServiceImpl uploadService;

    public UploadController(UploadServiceImpl uploadService) {
        this.uploadService = uploadService;
    }

    @PostMapping("/post/{username}/{description}")
    public void uploadPost(@RequestParam("post_picture") MultipartFile file, @PathVariable String username, @PathVariable String description) throws IOException {
        uploadService.createNewPost(file, username, description);
    }

    @GetMapping("/get/all/posts")
    public List<Post> getAllPosts() {
        return uploadService.getAllPosts();
    }

    @GetMapping("/get/post-images/{postId}")
    public ResponseEntity<byte[]> getPostImages(@PathVariable int postId) {
        Post foundPost = uploadService.findPostById(postId);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, MediaType.IMAGE_JPEG_VALUE)
                .body(foundPost.getImage());
    }
}
