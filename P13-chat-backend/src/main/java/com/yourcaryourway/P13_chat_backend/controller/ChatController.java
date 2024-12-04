package com.yourcaryourway.P13_chat_backend.controller;


import com.yourcaryourway.P13_chat_backend.model.Message;
import com.yourcaryourway.P13_chat_backend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ChatController {

    @Autowired
    private MessageService messageService;

    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public Message sendMessage(Message message) {
        // Sauvegarde le message en utilisant le service
        return messageService.saveMessage(message);
    }
}
