package net.crazysoziety.backend.controller;

import net.crazysoziety.backend.model.User;
import net.crazysoziety.backend.service.UserServiceImpl;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/session")
public class SessionController {

    private final UserServiceImpl userService;

    public SessionController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return userService.login(user);
    }
}
