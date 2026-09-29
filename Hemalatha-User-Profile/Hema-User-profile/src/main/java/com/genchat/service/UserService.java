package com.genchat.service;
import com.genchat.model.User; import com.genchat.repository.UserRepository; import org.springframework.security.crypto.password.PasswordEncoder; import org.springframework.stereotype.Service;
@Service public class UserService {
 private final UserRepository repo; private final PasswordEncoder encoder;
 public UserService(UserRepository repo,PasswordEncoder encoder){this.repo=repo;this.encoder=encoder;}
 public User register(String username,String password){ if(repo.findByUsername(username).isPresent()) throw new IllegalArgumentException("Username already exists"); return repo.save(new User(username,encoder.encode(password))); }
}
