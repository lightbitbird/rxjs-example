import * as io from 'socket.io-client';

export class Client {
    private socket;
    constructor() {
        // this.socket = io('http://localhost:8000');
        this.socket = io.connect('http://localhost:8000');
    }

    greeting() {
      const exec = () => {
        this.socket.on('greeting', function(data, fn) {
          let answer = confirm(data.message);
          console.log('answer: ', answer );
          fn(answer);
        });
      };
      exec();
    }
}