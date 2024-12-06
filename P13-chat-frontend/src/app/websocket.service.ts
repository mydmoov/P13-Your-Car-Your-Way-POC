import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket: Socket | undefined;
  private readonly SERVER_URL = 'http://localhost:3666'; // URL du serveur WebSocket

  constructor() {}

  // Initialise la connexion WebSocket

  initializeWebSocketConnection(): void {
    try {
      this.socket = io(this.SERVER_URL, {
        reconnectionAttempts: 5, // Limite le nombre de tentatives
        timeout: 5000, // Timeout pour la connexion
      });

      this.socket.on('connect', () => {
        console.log('Connected to WebSocket server');
      });

      this.socket.on('disconnect', () => {
        console.log('Disconnected from WebSocket server');
      });

      this.socket.on('chatMessage', (message: any) => {
        console.log('Received message: ', message);
      });

      this.socket.on('connect_error', (error: any) => {
        console.error('WebSocket connection error:', error);
      });

      this.socket.on('error', (error: any) => {
        console.error('WebSocket error:', error);
      });
    } catch (error) {
      console.error('Error initializing WebSocket connection:', error);
    }
  }

  // Méthode pour envoyer un message via WebSocket
  sendMessage(message: { sender: string; content: string }): void {
    if (this.socket && this.socket.connected) {
      this.socket.emit('chatMessage', message);
    } else {
      console.warn('WebSocket is not connected. Message not sent:', message);
    }
  }

  // Méthode pour déconnecter le socket
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      console.log('WebSocket connection closed');
    }
  }
}
