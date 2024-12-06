package com.yourcaryourway.P13_chat_backend.runner;

import com.corundumstudio.socketio.SocketIOServer;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

@Component
public class SocketIOServerRunner {

    private final SocketIOServer server;
    private boolean isRunning = false; // Indicateur pour le statut du serveur

    public SocketIOServerRunner(SocketIOServer server) {
        this.server = server;
    }

    @PostConstruct
    public void startServer() {
        if (!isRunning) {
            System.out.println("Démarrage du serveur Socket.IO...");
            server.start();
            isRunning = true;
        } else {
            System.out.println("Le serveur Socket.IO est déjà en cours d'exécution.");
        }
    }

    @PreDestroy
    public void stopServer() {
        if (isRunning) {
            System.out.println("Arrêt du serveur Socket.IO...");
            server.stop();
            isRunning = false;
        }
    }

    public boolean isServerRunning() {
        return isRunning;
    }
}
