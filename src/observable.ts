import { Observable } from 'rxjs';

export const self_observer1 = (): void => {
  console.log('self_observer1 start: ');
  var observer_1 = {
    next: x => console.log('got a value: ' + x),
    error: err => console.log('got an error: ' + err),
    complete: () => console.log('got complete'),
  }; 

  function subscribe_1(observer: any) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  }

  subscribe_1(observer_1);
};

export const self_observer2 = (): void => {
  console.log('self_observer2 start: ');
  function _subscribe(observer: any) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  }

  const observable_2 = Observable.create(_subscribe);

  const observer_2 = {
    next: x => console.log('got a value: ' + x),
    error: err => console.log('got an error: ' + err),
    complete: () => console.log('got complete'),
  }; 

  observable_2.subscribe(observer_2);
};
