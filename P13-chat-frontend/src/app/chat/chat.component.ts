import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebSocketService } from '../websocket.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messages: { sender: string; content: string }[] = [];
  messageContent: string = '';
  sender: string = 'Client';

  constructor(private webSocketService: WebSocketService) {}

  sendMessage(): void {
    const message = { sender: this.sender, content: this.messageContent };
    this.webSocketService.sendMessage(message);
    this.messageContent = '';
  }
}
