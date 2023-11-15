package net.crazysoziety.backend.service;

import jakarta.transaction.Transactional;
import net.crazysoziety.backend.model.User;
import net.crazysoziety.backend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final TokenServiceImpl tokenService;

    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, TokenServiceImpl tokenService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenService = tokenService;
    }

    @Override
    @Transactional
    public void saveUser(User user) {
        userRepository.save(user);
    }

    @Override
    public String createNewUser(User user) {
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        saveUser(user);
        return "User created!";
    }

    @Override
    public String login(User user) {
        User foundUser = userRepository.findByUsername(user.getUsername());

        if (passwordEncoder.matches(user.getPassword(), foundUser.getPassword())) {
            return tokenService.generateToken(foundUser);
        }

        return "Wrong data!";
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User getUserInfo(String token) {
        String username = tokenService.extractUsername(token);
        User foundUser = userRepository.findByUsername(username);
        return foundUser;
    }

    @Override
    public String uploadProfilePicture(MultipartFile file, String username) throws IOException {
        byte[] imageBytes = file.getBytes();

        User foundUser = userRepository.findByUsername(username);
        foundUser.setProfile_picture(imageBytes);
        saveUser(foundUser);

        return "picture uploaded.";
    }
}
