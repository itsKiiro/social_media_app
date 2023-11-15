package net.crazysoziety.backend.service;

import jakarta.transaction.Transactional;
import net.crazysoziety.backend.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UserService {
    @Transactional
    void saveUser(User user);

    String createNewUser(User user);

    String login(User user);

    User findByUsername(String username);

    User getUserInfo(String token);

    String uploadProfilePicture(MultipartFile file, String username) throws IOException;
}
