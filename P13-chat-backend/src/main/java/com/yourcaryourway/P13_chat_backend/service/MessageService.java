package com.yourcaryourway.P13_chat_backend.service;


import com.yourcaryourway.P13_chat_backend.model.Message;
import com.yourcaryourway.P13_chat_backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Transactional
    // Méthode pour sauvegarder un message
    public Message saveMessage(Message message) {
        message.setTimestamp(java.time.LocalDateTime.now());  // Ajouter un timestamp
        Message message1 = messageRepository.save(message);  // Sauvegarde en base de données
        return message1;  // Sauvegarde en base de données
    }
}
