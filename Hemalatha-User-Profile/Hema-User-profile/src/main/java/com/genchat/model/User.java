package com.genchat.model;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column(nullable=false, unique=true) private String username;
    @Column(nullable=false) private String password;
    public User() {}
    public User(String username,String password){this.username=username;this.password=password;}
    public Long getId(){return id;} public String getUsername(){return username;} public String getPassword(){return password;}
    public void setId(Long id){this.id=id;} public void setUsername(String u){this.username=u;} public void setPassword(String p){this.password=p;}
}
