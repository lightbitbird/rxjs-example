import {subscribeListDoc} from './list_node';
import {self_observer1, self_observer2} from './observable';
import { subject1, subjectWithSubscribe } from './subject';

const message: string = 'Hello World';

// sub.jsに定義されたJavaScriptを実行する。
subscribeListDoc();
self_observer1();
self_observer2();
subject1();
subjectWithSubscribe();