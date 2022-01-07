import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  public socketStatus = false;
  constructor(private socket: Socket) { 
    this.checkStatus();
  }


  public checkStatus(){
    this.socket.on('connect', () => {
      console.log('Conectado');
      this.socketStatus = true
    })
    this.socket.on('disconnect', () => {
      console.log('desconectado');
      this.socketStatus = false
    })
  }

  public emit(evento: string, payload?: any, cn?: Function){
    console.log('emitiendo evento');
    
    this.socket.emit(evento, payload, cn);
  }




}
