import { LinkedList } from "./LinkedListCollection";
import { StringCollection } from "./StringCollection";

import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -4, 0]);

numbersCollection.sort();
console.log(numbersCollection.data);

const charCollection = new StringCollection("asdasdads");

charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(0);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
