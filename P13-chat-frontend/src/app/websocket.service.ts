// websocket.service.ts
import { Injectable } from '@angular/core';
import {Client, Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

// Polyfill for global
if (typeof window !== 'undefined') {
  (window as any).global = window;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private stompClient: any;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    const socket = new SockJS('http://localhost:3555/chat');
    this.stompClient = Stomp.over(socket);
    if (this.stompClient) {
      this.stompClient.connect({}, (frame:any) => {
        console.log('Connected: ' + frame);
        this.stompClient.subscribe('/topic/messages', (message:any) => {
          if (message.body) {
            console.log(message.body);
          }
        });
      }, (error:any) => {
        console.error('Error: ' + error);
      });
    }
  }

  sendMessage(message: { sender: string; content: string }): void {
    this.stompClient.send('/app/chat', {}, JSON.stringify(message));
  }
}
