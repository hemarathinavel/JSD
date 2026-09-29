package com.genchat.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="messages")
public class Message {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
    @Column(nullable=false) private String sender;
    @Column(nullable=false, length=1000) private String content;
    @Column(nullable=false) private LocalDateTime createdAt;
    public Message() {}
    public Message(String sender,String content){this.sender=sender;this.content=content;this.createdAt=LocalDateTime.now();}
    public Long getId(){return id;} public String getSender(){return sender;} public String getContent(){return content;} public LocalDateTime getCreatedAt(){return createdAt;}
    public void setId(Long id){this.id=id;} public void setSender(String s){this.sender=s;} public void setContent(String c){this.content=c;} public void setCreatedAt(LocalDateTime t){this.createdAt=t;}
}
