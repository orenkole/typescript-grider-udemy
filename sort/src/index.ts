import { NumbersCollections } from "./NumbersCollection";
import {CharactersCollections} from "./CharactersCollections";
import {LinkedList} from "./LinkedList";
import {Sorter} from "./Sorter"

const numbersCollection = new NumbersCollections([10, 3, -5, 0])
const sorterNum = new Sorter(numbersCollection);
sorterNum.sort();
console.log(sorterNum.collection);


const charactersCollection = new CharactersCollections("Xaayb")
const sorterChar = new Sorter(charactersCollection);
sorterChar.sort();
console.log(sorterChar.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sorterLinkedList = new Sorter(linkedList);
sorterChar.sort();
linkedList.print();
