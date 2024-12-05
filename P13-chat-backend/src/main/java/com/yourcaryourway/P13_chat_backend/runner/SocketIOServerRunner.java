package com.yourcaryourway.P13_chat_backend.runner;


import com.corundumstudio.socketio.SocketIOServer;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

@Component
public class SocketIOServerRunner {

    private final SocketIOServer server;

    public SocketIOServerRunner(SocketIOServer server) {
        this.server = server;
    }

    @PostConstruct
    public void startServer() {
        System.out.println("Starting Socket.IO server...");
        server.start();
    }

    @PreDestroy
    public void stopServer() {
        System.out.println("Stopping Socket.IO server...");
        server.stop();
    }
}
