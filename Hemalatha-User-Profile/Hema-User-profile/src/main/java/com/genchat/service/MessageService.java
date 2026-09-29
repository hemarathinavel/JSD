package com.genchat.service;
import com.genchat.model.Message; import com.genchat.repository.MessageRepository; import org.springframework.stereotype.Service; import java.util.List;
@Service public class MessageService { private final MessageRepository repo; public MessageService(MessageRepository repo){this.repo=repo;} public Message send(String sender,String content){return repo.save(new Message(sender,content));} public List<Message> all(){return repo.findAllByOrderByCreatedAtAsc();} }
