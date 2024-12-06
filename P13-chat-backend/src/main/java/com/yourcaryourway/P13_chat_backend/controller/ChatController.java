package com.yourcaryourway.P13_chat_backend.controller;

import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.annotation.OnEvent;
import com.yourcaryourway.P13_chat_backend.model.Message;
import org.springframework.stereotype.Component;

@Component
public class ChatController {

    private final SocketIOServer server;

    public ChatController(SocketIOServer server) {
        this.server = server;
    }

    @OnEvent("chatMessage")
    public void onChatMessage(SocketIOClient client, Message message) {
        if (message == null || message.getContent() == null || message.getContent().trim().isEmpty()) {
            System.out.println("Message vide reçu. Ignoré.");
            return;
        }
        System.out.println("Message reçu de " + message.getSender() + ": " + message.getContent());
        server.getBroadcastOperations().sendEvent("chatMessage", message);
    }
}
