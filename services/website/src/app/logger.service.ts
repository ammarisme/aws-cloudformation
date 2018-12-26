import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {environment} from '../environments/environment';


import * as socketIo from 'socket.io-client';


const SERVER_URL = environment.loggerUrl;

@Injectable()
export class LoggerService {
  public  tokenObservable;
  public  connectObservable;
  public  usersConnectedObservable;
  public  messageRecievedObservable;
  public  messages: LogMessage[] = [];
  public  currentlyChattingOtherUser: string;
  private socket;
  private messageData: any = [];
  logedIn: Subject<any> = new Subject<any>();
  myToken;

  constructor() {
  }

  public register(user) {
    this.socket.emit('register', user);
  }

  public disconnect() {
    this.socket.disconnect();
  }

  public initSocket(username): void {
    this.socket = socketIo(SERVER_URL);

    this.tokenObservable = new Observable(observer => {
      this.socket.on('token', (data) => {
        observer.next(data);
        this.myToken = data;
      });
      return () => {
        this.socket.disconnect();
      };
    });

    this.connectObservable = new Observable(observer => {
      this.socket.on('connect', (data) => {
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    this.usersConnectedObservable = new Observable(observer => {
      this.socket.on('usersconnected', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });


    this.messageRecievedObservable = new Observable(observer => {
      this.socket.on('messagerecieved', (data) => {
        this.messages.push(data);
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

  public send(message): void {
    this.socket.emit('sendLogMessage', JSON.stringify(message));
  }

  public onLogMessage(): Observable<LogMessage> {
    return new Observable<LogMessage>(observer => {
      this.socket.on('message', (data: LogMessage) => {
        this.messages.push(data);
        observer.next(data);
      });
    });
  }

  public GetConnectedUsers() {

  }

  // We define our observable which will observe any incoming messages
  // from our socket.io server. Remember this will keep pushing items in your array as they arrive
  // and keep returning messageData array
  public getLogMessages(): Observable<any[]> {
    this.socket.onLogMessageArrived = (message: any) => {
      this.messageData.push(JSON.parse(message.payloadString));
    };

    return Observable.create(observer => {
      observer.next(this.messageData);
      observer.complete();
    });
  }
}

export class LogMessage {

}
