import { Observable, of } from 'rxjs';

const listDocument = Observable.create((observer:any) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye');
});

export const subscribeListDoc = () => {
  console.log('subscribeListDoc: ');
  of(1, 2, 3).subscribe(
      (x:any) => logItem(x),
      (error: any) => logItem ('Error: ' + error),
      () => logItem('Completed for of')
  );
  listDocument.subscribe(
      (x:any) => logItem(x),
      (error: any) => logItem ('Error: ' + error),
      () => logItem('Completed for create')
  );
}

function logItem(val:any) {
    console.log(val);
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    const list = document.getElementById("list");
    list ? document.getElementById("list").appendChild(node) : null;
}