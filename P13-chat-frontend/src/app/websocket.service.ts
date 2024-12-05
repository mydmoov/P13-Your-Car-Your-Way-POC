import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket: Socket | undefined;
  private readonly SERVER_URL = 'http://localhost:3666'; // Mettre à jour avec le nouveau port

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    this.socket = io(this.SERVER_URL); // Connexion au backend via Socket.IO

    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    this.socket.on('chatMessage', (message: any) => {
      console.log('Received message: ', message);
    });
  }

  sendMessage(message: { sender: string; content: string }): void {
    if (this.socket) {
      this.socket.emit('chatMessage', message); // Envoyer un message au serveur
    }
  }
}
