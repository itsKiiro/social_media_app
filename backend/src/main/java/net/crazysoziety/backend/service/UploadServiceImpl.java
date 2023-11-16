package net.crazysoziety.backend.service;

import net.crazysoziety.backend.model.Post;
import net.crazysoziety.backend.model.User;
import net.crazysoziety.backend.repository.UploadRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class UploadServiceImpl implements UploadService {

    private final UserServiceImpl userService;
    private final UploadRepository uploadRepository;

    public UploadServiceImpl(UserServiceImpl userService, UploadRepository uploadRepository) {
        this.userService = userService;
        this.uploadRepository = uploadRepository;
    }

    @Override
    public Post findPostById(int postId) {
        return uploadRepository.findPostById(postId);
    }

    @Override
    public void createNewPost(MultipartFile file, String username, String description) throws IOException {
        User user = userService.findByUsername(username);

        Post post = new Post();
        post.setImage(file.getBytes());
        post.setUser(user);
        post.setDescription(description);

        uploadRepository.save(post);

        user.getPosts().add(post);
        userService.saveUser(user);
    }

    @Override
    public List<Post> getAllPosts() {
        return uploadRepository.findAll();
    }

}
