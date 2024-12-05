package com.yourcaryourway.P13_chat_backend.configuration;

import org.springframework.context.annotation.Configuration; // Annotation Spring
import com.corundumstudio.socketio.SocketIOServer;
import org.springframework.context.annotation.Bean;

@Configuration
public class SocketIOConfig {

    @Bean
    public SocketIOServer socketIOServer() {
        com.corundumstudio.socketio.Configuration socketConfig = new com.corundumstudio.socketio.Configuration();
        socketConfig.setHostname("localhost");
        socketConfig.setPort(3666); // Port à utiliser pour Socket.IO
        return new SocketIOServer(socketConfig);
    }
}
