import { Component, OnInit } from '@angular/core';
import { ChatService } from './core/services/chat.service';
import { WebSocketService } from './core/services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socket-basico';

  constructor(
    public webScoketS: WebSocketService,
    public chatService: ChatService
    ){

}

  ngOnInit(): void {
      this.chatService.sendMessage('Hola desde angular');
  }
}
