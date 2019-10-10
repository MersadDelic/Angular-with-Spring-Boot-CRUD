package com.example.demo.controller;

import com.example.demo.model.Post;
import com.example.demo.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/getposts")
    public ResponseEntity<?> getAllPosts() {
        return new ResponseEntity<>(
                postRepository.findAll(),
                HttpStatus.OK);
    }

   /* @GetMapping("/getposts")
    public List<Post> findAll() {
        return postRepository.findAll();
    } */

    @PostMapping("/posts")
    public Post createPost(@Valid @RequestBody Post post) {
        return postRepository.save(post);
    }

    @PutMapping("/posts/{postId}")
    public Post updatePost(@PathVariable Long postId, @Valid @RequestBody Post postRequest) {
        return postRepository.findById(postId).map(post -> {
            post.setTitle(postRequest.getTitle());
            post.setDescription(postRequest.getDescription());
            post.setContent(postRequest.getContent());
            return postRepository.save(post);
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }


    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable Long postId) {
        return postRepository.findById(postId).map(post -> {
            postRepository.delete(post);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }

}

