package net.crazysoziety.backend.controller;

import net.crazysoziety.backend.model.User;
import net.crazysoziety.backend.service.UserServiceImpl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    private final UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @PostMapping("/sign-up")
    public String signUp(@RequestBody User user) {
        return userService.createNewUser(user);
    }

    @GetMapping("/get/user/info")
    public User getUserInfo(@RequestHeader("Authorization") String token) {
        return userService.getUserInfo(token);
    }

    @PostMapping("/upload/{username}")
    public String uploadFile(@RequestParam("profile_picture") MultipartFile file, @PathVariable String username) throws IOException {
        return userService.uploadProfilePicture(file, username);
    }

    @GetMapping("/{username}/profile-picture")
    public ResponseEntity<byte[]> getProfilePicture(@PathVariable String username) {
        User user = userService.findByUsername(username);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, MediaType.IMAGE_JPEG_VALUE)
                .body(user.getProfile_picture());
    }
}
