package com.yourcaryourway.P13_chat_backend.mappers;

import com.yourcaryourway.P13_chat_backend.controller.payload.MessageResponse;
import com.yourcaryourway.P13_chat_backend.model.Message;
import com.yourcaryourway.P13_chat_backend.controller.payload.MessageRequest;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MessageMapper {

    MessageMapper INSTANCE = Mappers.getMapper(MessageMapper.class);


    Message toDomain(MessageRequest dto);


    MessageResponse toMessageResponse(Message domain);


    List<MessageResponse> toMessagesResponse(List<Message> domains);
}
