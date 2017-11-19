export class Message {
  id: number;
  username: string;
  message: string;
}
export class Chat {
  id: number;
  messages: Message[];
}
