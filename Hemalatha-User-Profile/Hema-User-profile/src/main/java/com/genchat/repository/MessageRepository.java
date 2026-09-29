package com.genchat.repository;
import com.genchat.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface MessageRepository extends JpaRepository<Message,Long>{List<Message> findAllByOrderByCreatedAtAsc();}
