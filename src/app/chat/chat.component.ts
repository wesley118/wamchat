import { Component, OnInit } from '@angular/core';

import { Chat, Message } from '../chat';

import { CHATS } from '../mock-chats';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[];
  getMessages(): void {
    this.messages = CHATS.messages;
  }
  saveMessage(): void {

  }
  constructor() { }

  ngOnInit() {
    this.getMessages();
  }

}
