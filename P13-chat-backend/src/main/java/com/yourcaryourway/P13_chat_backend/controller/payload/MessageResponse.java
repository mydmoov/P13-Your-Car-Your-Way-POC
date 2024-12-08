package com.yourcaryourway.P13_chat_backend.controller.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MessageResponse {
    private String message;
    private String sender;
}
