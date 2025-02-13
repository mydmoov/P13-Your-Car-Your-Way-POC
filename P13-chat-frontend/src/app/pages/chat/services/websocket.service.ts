import { Injectable, NgZone } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  public socket: Socket | undefined;
  private readonly SERVER_URL = 'http://127.0.0.1:8085';
  constructor(private ngZone: NgZone) {
  }

  initializeWebSocketConnection(): void {
    this.ngZone.runOutsideAngular(() => {
    if (this.socket && this.socket.connected) {
      console.warn('WebSocket connection already established');
      return;
    }

    this.socket = io(this.SERVER_URL, {
      timeout:10000,
      reconnectionAttempts: 3,
    });

    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    this.socket.on('disconnect', (reason: string) => {
      console.warn('Disconnected from WebSocket server:', reason);
    });

    this.socket.on('connect_error', (error: any) => {
      console.error('WebSocket connection error:', error);
    });
  });

  }


  sendMessage(message: { sender: string; content: string }): void {
    if (this.socket) {
      this.socket.emit('sendMessage', message); // Envoyer un message au serveur
      console.log('did send message');
    }

  }


  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = undefined;
    }
  }


}
