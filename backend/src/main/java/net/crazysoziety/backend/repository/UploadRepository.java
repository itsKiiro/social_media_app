package net.crazysoziety.backend.repository;

import net.crazysoziety.backend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UploadRepository extends JpaRepository<Post, Integer> {
    Post findPostById(int id);
}
