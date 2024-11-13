package com.yourcaryourway.P13_chat_backend.controller;


import com.yourcaryourway.P13_chat_backend.model.Message;
import com.yourcaryourway.P13_chat_backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private MessageRepository messageRepository;

    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public Message sendMessage(Message message) {
        message.setTimestamp(java.time.LocalDateTime.now());
        messageRepository.save(message);  // Sauvegarde en base de données
        return message;
    }
}
