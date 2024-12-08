package com.yourcaryourway.P13_chat_backend.service;

import com.yourcaryourway.P13_chat_backend.controller.payload.MessageResponse;
import com.yourcaryourway.P13_chat_backend.mappers.MessageMapper;
import com.yourcaryourway.P13_chat_backend.model.Message;
import com.yourcaryourway.P13_chat_backend.repository.MessageRepository;
import com.yourcaryourway.P13_chat_backend.controller.payload.MessageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;


    @Transactional
    @Override
    public void saveMessage(MessageRequest messageRequest) {
        final Message message = MessageMapper.INSTANCE.toDomain(messageRequest);
        messageRepository.save(message);
    }

    @Override
    public List<MessageResponse> getAllMessages() {
        List<Message> messages = messageRepository.findAll();
        return  MessageMapper.INSTANCE.toMessagesResponse( messages);
    }


}
