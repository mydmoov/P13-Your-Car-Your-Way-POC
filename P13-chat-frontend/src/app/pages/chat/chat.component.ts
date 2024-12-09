import { ChangeDetectorRef, Component, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from '../../websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  {
  messages: { sender: string; content: string }[] = [];
  messageContent: string = '';
  sender: string = 'Client';


  constructor(
    private webSocketService: WebSocketService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {

      if (this.webSocketService.socket?.connected) {
        this.webSocketService.disconnect();
      }

      this.webSocketService.initializeWebSocketConnection();
  
      this.webSocketService.socket?.on('connect', () => {
        console.log('WebSocket connection established');
      });
  
      this.webSocketService.socket?.on('chatMessage', (message: any) => {
        this.ngZone.run(() => {
          this.messages.push(message);
          console.log('Message added to list inside Angular zone:', message);
        });
      });

      this.webSocketService.socket?.on('connect_error', (error: any) => {
        console.error('Failed to connect to WebSocket server:', error);
      });
  }
  
  sendMessage(): void {
    const message = { sender: this.sender, content: this.messageContent };
    this.webSocketService.sendMessage(message);
    this.messageContent = '';
  }


  ngOnDestroy(): void {
    this.webSocketService.socket?.off('chatMessage');
    this.webSocketService.disconnect();
  }
}
