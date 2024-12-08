import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from '../../websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messages: { sender: string; content: string }[] = [];
  messageContent: string = '';
  sender: string = 'Client';


  constructor(
    private webSocketService: WebSocketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    try {
    this.webSocketService.initializeWebSocketConnection();

    this.webSocketService.socket?.on('connect', () => {
      console.log('WebSocket connection established');
    });

    this.webSocketService.socket?.on('chatMessage', (message: any) => {
      this.messages.push(message); // Ajouter le message reçu à la liste
      console.log('New message received:', message);
    });
    this.webSocketService.socket?.on('connect_error', (error: any) => {
      console.error('Failed to connect to WebSocket server:', error);
      alert('Unable to connect to the chat server. Please try again later.');
      this.goBack();
    });
  }catch (error) {
    console.error('Error initializing WebSocket:', error);
    alert('An unexpected error occurred.');
    this.goBack();
  }
  }

  goBack(): void {
    this.router.navigate(['/']); // Retour à la route racine ou toute autre route souhaitée
  }
  
  sendMessage(): void {
    const message = { sender: this.sender, content: this.messageContent };
    console.log(message)
    this.webSocketService.sendMessage(message);
    this.messageContent = '';
  }


  ngOnDestroy(): void {
    // Nettoyer les écouteurs pour éviter les fuites de mémoire
    this.webSocketService.socket?.off('chatMessage');
    // Déconnecter le WebSocket
  this.webSocketService.disconnect();
  }
}
