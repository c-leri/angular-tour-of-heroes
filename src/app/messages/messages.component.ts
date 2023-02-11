import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { MessageService } from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  faXmark = faXmark;

  constructor(public messageService: MessageService) {}
}
