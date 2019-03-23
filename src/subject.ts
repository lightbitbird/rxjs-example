import { Observable, Subject, of } from 'rxjs';

const observer1 = {
  next: x => console.log(`Observer1 got a value: ${x}`),
  complete: () => console.log('Observer1 got complete')
}

const observer2 = {
  next: x => console.log(`Observer2 got a value: ${x}`),
  complete: () => console.log('Observer2 got complete')
}

const observer3 = {
  next: x => console.log(`Observer3 got a value: ${x}`),
  complete: () => console.log('Observer3 got complete')
}

const subject_1 = new Subject();

subject_1.subscribe(observer1);
subject_1.subscribe(observer2);
subject_1.subscribe(observer3);

export const subject1 = () => {
  console.log('subject1 start: ');
  subject_1.next('Streaming...');
}

const subject_2 = new Subject();
subject_2.subscribe(observer1);
subject_2.subscribe(observer2);
subject_2.subscribe(observer3);

export const subjectWithSubscribe = () => {
  console.log('subject with subscribing start: ');
  Observable.create((observer: any) => {
    observer.next('hello');
    observer.next('again');
    observer.next('and more');
    observer.complete('finished');
  }).subscribe(subject_2);
  of(1,2).subscribe(subject_2);
}
