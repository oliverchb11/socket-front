import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebSocketService
  ) { }

  public sendMessage(mensaje: string){
    const payload = {
      from: 'Oliver',
      cuerpo: mensaje
    }
    this.wsService.emit('message', payload );
  }
}
