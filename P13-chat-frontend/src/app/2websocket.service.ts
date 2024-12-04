import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClient: any;
  private connected = false;

  constructor() {
    const socket = new SockJS('http://localhost:3555/ws-chat'); // URL du backend Spring Boot
    this.stompClient = Stomp.over(socket);
  }

  connect(onMessageReceived: (message: any) => void): void {
    if (!this.connected) {
      this.stompClient.connect({}, () => {
        console.log('Connected to WebSocket');
        this.connected = true;

        // Subscribe to the topic
        this.stompClient.subscribe('/topic/messages', (message: any) => {
          onMessageReceived(JSON.parse(message.body));
        });
      });
    }
  }

  sendMessage(message: { sender: string; content: string }): void {
    if (this.connected) {
      console.log('Sending message to WebSocket');
      this.stompClient.send('/app/send', {}, JSON.stringify(message));
    } else {
      console.error('WebSocket is not connected!');
    }
  }

  disconnect(): void {
    if (this.connected) {
      this.stompClient.disconnect(() => {
        console.log('Disconnected from WebSocket');
        this.connected = false;
      });
    }
  }
}
