import LinkedList from "./LinkedList/LinkedList.js";

const linkedList1 = new LinkedList();

linkedList1.addToHead(1);
linkedList1.addToHead(3);
linkedList1.addToHead(4);
linkedList1.addToHead(7);
linkedList1.addToHead(12);
linkedList1.addToHead(14);

linkedList1.addToTail(5);
linkedList1.addToTail(8);
linkedList1.addToTail(2);
linkedList1.addToTail(9);
linkedList1.addToTail(4);
linkedList1.addToTail(0);

linkedList1.printList();
