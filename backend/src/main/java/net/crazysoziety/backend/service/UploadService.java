package net.crazysoziety.backend.service;

import net.crazysoziety.backend.model.Post;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface UploadService {

    Post findPostById(int postId);

    void createNewPost(MultipartFile file, String username, String description) throws IOException;

    List<Post> getAllPosts();
}
